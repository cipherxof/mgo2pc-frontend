import { getClan } from '@/services/mgo2pc/api';
import { getUserToken } from '@/system/utility';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Descriptions, Divider, message, Table, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import { NavLink, useParams, useRequest } from 'umi';

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isPng = file.type === 'image/png';
  if (!isPng) {
    message.error('You can only upload a PNG file!');
  }
  const isLt2M = file.size < 2000000;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB');
  }
  return isPng && isLt2M;
};

type ClanParams = {
  id: string;
};

export default (): React.ReactNode => {
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
      title: 'Name',
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
        message.error('There was an error uploading your clan image.');
      }
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setUploading(false);
        setImageUrl(url);
        message.success('Your clan emblem has successfully been updated.');
      });
    }
  };

  const uploadButton = (
    <div>
      {uploading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Emblem</div>
    </div>
  );

  document.title = 'Clan - Metal Gear Online';

  let notice = <></>;

  if (data && data.notice && data.notice.length > 0) {
    notice = (
      <>
        <Divider />
        <Alert message="Notice" description={data?.notice} type="info" showIcon />
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
              <Descriptions.Item label="Leader">{data?.leader}</Descriptions.Item>
              <Descriptions.Item label="Members">
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
              <img src={imageUrl} alt="emblem" style={{ height: '64px', width: '64px' }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </div>
    </PageContainer>
  );
};
