import { getClan } from '@/services/mgo2pc/api';
import { getUserToken } from '@/system/utility';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Descriptions, Divider, message, Table, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import { NavLink, useIntl, useParams, useRequest } from 'umi';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isPng = file.type === 'image/png';
  if (!isPng) {
    message.error(`${intl.formatMessage({ id: 'app.uploaderror1' })}`);
  }
  const isLt2M = file.size < 2000000;
  if (!isLt2M) {
    message.error(`${intl.formatMessage({ id: 'app.uploaderror2' })}`);
  }
  return isPng && isLt2M;
};

type ClanParams = {
  id: string;
};

export default (): React.ReactNode => {
  const intl = useIntl();
  const params = useParams<ClanParams>();
  const { data, loading } = useRequest(() => getClan(params.id));
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const url = `/static/media/emblems/${data?.emblem}.png`;
  if (!loading && data && data.emblem && data.emblem !== '' && !imageUrl) {
    setImageUrl(url);
  }

  const columns = [
    {
      title: `${intl.formatMessage({ id: 'app.playername' })}`,
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <NavLink to={`/profile/${encodeURIComponent(text)}`}>{text}</NavLink>,
    },
  ];

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    //console.log(info);
    if (info.file.status === 'uploading') {
      setUploading(true);
      return;
    }
    if (info.file.status === 'error') {
      setUploading(false);
      if (info.file.response && info.file.response.message) {
        message.error(info.file.response.message);
      } else {
        message.error(`${intl.formatMessage({ id: 'app.uploaderror3' })}`);
      }
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setUploading(false);
        setImageUrl(url);
        message.success(`${intl.formatMessage({ id: 'app.uploadsuccess' })}`);
      });
    }
  };

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>{intl.formatMessage({ id: 'app.uploademblem' })}</div>
    </div>
  );

  document.title = 'Clan - Metal Gear Online';

  let notice = <></>;

  if (data && data.notice && data.notice.length > 0) {
    notice = (
      <>
        <Divider />
        <Alert
          message={intl.formatMessage({ id: 'app.notice' })}
          description={data?.notice}
          type="info"
          showIcon
        />
      </>
    );
  }
  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-10">
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title={data?.name}
            subTitle={data?.comment}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label={intl.formatMessage({ id: 'app.clanleader' })}>
                {data?.leader}
              </Descriptions.Item>
              <Descriptions.Item label={intl.formatMessage({ id: 'app.members' })}>
                {data?.members ? data.members.length : 0}
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          {notice}
          <Divider />
          <Table dataSource={data ? data.members : []} columns={columns} />
        </div>
        <div className="col-md-2">
          <Upload
            disabled={data?.owner === false}
            name="emblem"
            listType="picture-card"
            showUploadList={false}
            action="/api/v1/uploademblem"
            beforeUpload={beforeUpload}
            onChange={handleChange}
            headers={{ authorization: `${getUserToken()}`, clan: params.id }}
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={intl.formatMessage({ id: 'app.emblem' })}
                style={{ height: '64px', width: '64px' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </div>
    </PageContainer>
  );
};
