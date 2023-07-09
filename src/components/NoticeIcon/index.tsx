import { getNotifications, readNotification } from '@/services/mgo2pc/api';
import { getUserToken } from '@/system/utility';
import { message, Tag } from 'antd';
import { groupBy } from 'lodash';
import { useEffect, useState } from 'react';
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
      newNotice.datetime = notice.datetime;
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

      const response = await getNotifications();

      if (!response || !response.notifications) {
        return;
      }

      response.notifications.forEach((n: any) => {
        n.type = n.type === 0 ? 'notification' : 'message';
        //@ts-ignore
        n.read = n.unread === 0;
        //@ts-ignore
        n.description = n.contents;
      });

      setNotices(response.notifications);
    };

    fetchData();

    const timeout = setInterval(() => fetchData(), 1000 * 60 * 10); // refresh every 10 minutes

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
        if (notice.id === id && !notice.read && notice.type === 0) {
          notice.read = true;
          notice.unread = 0;

          const token = getUserToken();

          if (token) {
            readNotification(id);
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
      readNotification('0');
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
