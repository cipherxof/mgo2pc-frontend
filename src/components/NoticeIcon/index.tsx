import { getUserToken } from '@/system/utility';
import { message, Tag } from 'antd';
import { groupBy } from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import API from '../../system/api';
import styles from './index.less';
import NoticeIcon from './NoticeIcon';

export type GlobalHeaderRightProps = {
  fetchingNotices?: boolean;
  onNoticeVisibleChange?: (visible: boolean) => void;
  onNoticeClear?: (tabName?: string) => void;
};

const getNoticeData = (notices: any[]): Record<string, any[]> => {
  if (!notices || notices.length === 0 || !Array.isArray(notices)) {
    return {};
  }

  const newNotices = notices.map((notice) => {
    const newNotice = { ...notice };

    if (newNotice.datetime) {
      newNotice.datetime = moment(notice.datetime as string).fromNow();
    }

    if (newNotice.id) {
      newNotice.key = newNotice.id;
    }

    if (newNotice.extra && newNotice.status) {
      const color = {
        todo: '',
        processing: 'blue',
        urgent: 'red',
        doing: 'gold',
      }[newNotice.status];
      newNotice.extra = (
        <Tag
          color={color}
          style={{
            marginRight: 0,
          }}
        >
          {newNotice.extra}
        </Tag>
      ) as any;
    }

    return newNotice;
  });
  return groupBy(newNotices, 'type');
};

const getUnreadData = (noticeData: Record<string, any[]>) => {
  const unreadMsg: Record<string, number> = {};
  Object.keys(noticeData).forEach((key) => {
    const value = noticeData[key];

    if (!unreadMsg[key]) {
      unreadMsg[key] = 0;
    }

    if (Array.isArray(value)) {
      unreadMsg[key] = value.filter((item) => item.unread === 1).length;
    }
  });
  return unreadMsg;
};

const NoticeIconView = () => {
  const [notices, setNotices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = getUserToken();
      
      if (!token) return;
      
      const response = await API.getNotifications(token);

      if (!response) {
        return;
      }
      
      response.data.notifications.forEach((n) => { 
        n.type = "notification";
        //@ts-ignore
        n.read = n.unread === 0; 
        //@ts-ignore
        n.description = n.contents
      });

      setNotices(response.data.notifications);
    };

    fetchData();

    const timeout = setInterval(() => fetchData(), 1000 * 60 * 30); // refresh every 30 minutes

    return () => {
      clearInterval(timeout);
    };
  }, []);
  
  useEffect(() => {
   //setNotices(getNotices());
  }, []);

  const noticeData = getNoticeData(notices);
  const unreadMsg = getUnreadData(noticeData || {});

  const changeReadState = (id: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.id === id && !notice.read) {
          notice.read = true;
          notice.unread = 0;

          const token = getUserToken();

          if (token) {
            API.readNotification(id, token);
          }
        }
        return notice;
      }),
    );
  };

  const clearReadState = (title: string, key: string) => {
    setNotices(
      notices.map((item) => {
        const notice = { ...item };
        if (notice.type === key) {
          notice.read = true;
        }
        return notice;
      }),
    );
    const token = getUserToken();

    if (token) {
      API.readNotification("0", token);
    }

    message.success(`Marking all notifications as read.`);
  };

  return (
    <NoticeIcon
      className={styles.action}
      count={unreadMsg.notification}
      onItemClick={(item) => {
        changeReadState(item.id!);
      }}
      onClear={(title: string, key: string) => clearReadState(title, key)}
      loading={false}
      clearText="Clear"
      onViewMore={() => message.info('Click on view more')}
      clearClose
    >
      <NoticeIcon.Tab
        tabKey="notification"
        count={unreadMsg.notification}
        list={noticeData.notification}
        title="Notifications"
        emptyText="You have no notifications"
        showViewMore
      />
      <NoticeIcon.Tab
        tabKey="message"
        count={unreadMsg.message}
        list={noticeData.message}
        title="Messages"
        emptyText="You have no messages."
        showViewMore
      />
    </NoticeIcon>
  );
};

export default NoticeIconView;
