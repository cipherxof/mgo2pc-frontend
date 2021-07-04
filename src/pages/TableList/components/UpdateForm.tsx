import React from 'react';
import { Modal } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormRadio,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;
export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.RuleListItem>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title={'Rule configuration'}
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          desc: props.values.desc,
        }}
        title={'Basic Information'}
      >
        <ProFormText
          name="name"
          label={'Rule Name'}
          width="md"
          rules={[
            {
              required: true,
              message: 'Please enter the rule name!',
            },
          ]}
        />
        <ProFormTextArea
          name="desc"
          width="md"
          label={'Rule Description'}
          placeholder={'Please enter at least five characters'}
          rules={[
            {
              required: true,
              message: 'Please enter a rule description of at least five characters!',
              min: 5,
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          target: '0',
          template: '0',
        }}
        title={'Configure Properties'}
      >
        <ProFormSelect
          name="target"
          width="md"
          label={'Monitoring Object'}
          valueEnum={{
            0: '表一',
            1: '表二',
          }}
        />
        <ProFormSelect
          name="template"
          width="md"
          label={'Rule Template'}
          valueEnum={{
            0: '规则模板一',
            1: '规则模板二',
          }}
        />
        <ProFormRadio.Group
          name="type"
          label={'Rule Type'}
          options={[
            {
              value: '0',
              label: '强',
            },
            {
              value: '1',
              label: '弱',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          type: '1',
          frequency: 'month',
        }}
        title={'Set Scheduling Period'}
      >
        <ProFormDateTimePicker
          name="time"
          width="md"
          label={'Starting Time'}
          rules={[
            {
              required: true,
              message: 'Please choose a start time!',
            },
          ]}
        />
        <ProFormSelect
          name="frequency"
          label={'Monitoring Object'}
          width="md"
          valueEnum={{
            month: '月',
            week: '周',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
