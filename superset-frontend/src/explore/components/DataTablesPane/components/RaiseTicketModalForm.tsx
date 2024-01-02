/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { useState } from 'react';
import { t, styled } from '@superset-ui/core';
import { Input, TextArea } from 'src/components/Input';
import FormRow from 'src/components/FormRow';
import { Select } from 'antd';

export function RaiseTicketModalForm({
  raiseTicketData,
  setRaiseTicketData,
  handleDropdownChange,
  handleSiteDropdownChange,
}: any) {
  interface StatusItem {
    masterName: string;
    // Add other properties if present in your actual data structure
  }

  
  interface RaiseTicketData {
    title: string;
    description: string;
    assignTo: any[]; // Adjust type based on your actual data structure
    reviewers: any[]; // Adjust type based on your actual data structure
    priority: any[];
    taskType: any[];
    status:StatusItem[];
    natureOfTask: any[]; // Adjust type based on your actual data structure
    site: any[]; // Adjust type based on your actual data structure
    location: any[]; // Adjust type based on your actual data structure
  }
  const [raiseTicketDataValue, setRaiseTicketDataValue] = useState<RaiseTicketData>({
    title: '',
    description: '',
    assignTo: [],
    reviewers: [],
    priority: [],
    taskType: [],
    status: [],
    natureOfTask: [],
    site: [],
    location: [],
  });
  console.log('selectedOption',raiseTicketDataValue)

  return (
    <div>

      <FormRow
        label={t('Title')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Input
            name="ticket_title"
            type="text"
            placeholder="Title"
            value={raiseTicketData?.title}
            onChange={e => {
              setRaiseTicketData({ ...raiseTicketData, title: e.target.value });
            }}
            data-test="new-chart-ticket_title"
          />
        }
      />

      <FormRow
        label={t('Description')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <TextArea
            name="titket_description"
            placeholder="Description"
            value={raiseTicketData?.description}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                description: e.target.value,
              });
            }}
            data-test="ticket_description"
          />
        }
      />

    
<FormRow
        label={t('Task Type')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_status"
            labelInValue
            options={raiseTicketData.taskType.map((statusItem:any) => ({
              label: statusItem.masterName,
              value: statusItem.masterName, // Adjust value as needed
            }))}
            placeholder={t('Task Type')}
            showSearch
            value={
              raiseTicketDataValue.taskType.length > 0
                ? {
                    label: raiseTicketDataValue.taskType[0].masterName,
                    value: raiseTicketDataValue.taskType[0].masterName,
                  }
                : undefined
            }
      onDropdownVisibleChange={(open) => {
        if (open) {
          const type='Task Type'
          handleDropdownChange(type);
        }
      }}
           onChange={(selectedOption) => {
         
        if (
          selectedOption &&
          typeof selectedOption === 'object' &&
          selectedOption !== null
        ) {
        
          setRaiseTicketDataValue({
            ...raiseTicketDataValue,
            taskType: selectedOption ? [{ masterName: selectedOption.label }] : [],
          });
          // Perform other actions using selectedOption
        }
      }}
            style={{ width: '100%' }}
          />
        }
      />
    

      <FormRow
        label={t('Status')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_status"
            labelInValue
            options={raiseTicketData.status.map((statusItem:any) => ({
              label: statusItem.masterName,
              value: statusItem.masterName, // Adjust value as needed
            }))}
            placeholder={t('Status')}
            showSearch
            value={
              raiseTicketDataValue.status.length > 0
                ? {
                    label: raiseTicketDataValue.status[0].masterName,
                    value: raiseTicketDataValue.status[0].masterName,
                  }
                : undefined
            }
         
      onDropdownVisibleChange={(open) => {
        if (open) {

          const type='Status'
          handleDropdownChange(type);
        }
      }}
           onChange={(selectedOption) => {
        if (
          selectedOption &&
          typeof selectedOption === 'object' &&
          selectedOption !== null
        ) {
      
          setRaiseTicketDataValue({
            ...raiseTicketDataValue,
            status: selectedOption ? [{ masterName: selectedOption.label }] : [],
          });
          // Perform other actions using selectedOption
        }
      }}
      
            style={{ width: '100%' }}
          />
        }
      />

      <FormRow
        label={t('Nature of Task')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_nature_of_task"
            labelInValue
            options={raiseTicketData.natureOfTask.map((statusItem:any) => ({
              label: statusItem.masterName,
              value: statusItem.masterName, // Adjust value as needed
            }))}
            placeholder={t('Nature of Task')}
            showSearch
            value={
              raiseTicketDataValue.status.length > 0
                ? {
                    key: raiseTicketDataValue.natureOfTask[0].masterName,
                    label: raiseTicketDataValue.natureOfTask[0].masterName,
                    value: raiseTicketDataValue.natureOfTask[0].masterName,
                  }
                : undefined
            }
            onDropdownVisibleChange={(open) => {
              if (open) {
                const type='Nature of Task'
                handleDropdownChange(type);
              }
            }}
                 onChange={(selectedOption) => {
              
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
              
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  natureOfTask: selectedOption ? [{ masterName: selectedOption.label }] : [],
                });
                // Perform other actions using selectedOption
              }
            }}
            style={{ width: '100%' }}
          />
        }
      />

      <FormRow
        label={t('Site')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_site"
            labelInValue
            options={raiseTicketData.site.map((statusItem:any) => ({
              label: statusItem.mainSite,
              value: statusItem.mainSite, // Adjust value as needed
            }))}
            placeholder={t('Site')}
            showSearch
            value={
              raiseTicketDataValue.site.length > 0
                ? {
                    key: raiseTicketDataValue.site[0].mainSite,
                    label: raiseTicketDataValue.site[0].mainSite,
                    value: raiseTicketDataValue.site[0].mainSite,
                  }
                : undefined
            }
            onDropdownVisibleChange={(open) => {
              if (open) {
                handleSiteDropdownChange();
              }
            }}
            onChange={(selectedOption) => {
          if (
            selectedOption &&
            typeof selectedOption === 'object' &&
            selectedOption !== null
          ) {
          
            setRaiseTicketDataValue({
              ...raiseTicketDataValue,
              site: selectedOption ? [{ mainSite: selectedOption.label }] : [],
            });
            // Perform other actions using selectedOption
          }
        }}
            style={{ width: '100%' }}
          />
        }
      />

      <FormRow
        label={t('Location')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Input
            name="tickt_location"
            type="text"
            placeholder="Location"
            value={raiseTicketData?.location}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                location: e.target.value,
              });
            }}
            data-test="ticket_location"
          />
        }
      />

      <FormRow
        label={t('Assign To')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_assign_to"
            labelInValue
            options={[]}
            placeholder={t('Assign To')}
            showSearch
            value={raiseTicketData?.assignTo}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                assignTo: e.target.value,
              });
            }}
            style={{ width: '100%' }}
          />
        }
      />

      <FormRow
        label={t('Reviewer')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_reviewer"
            labelInValue
            options={[]}
            placeholder="Ticket Reviewer"
            showSearch
            value={raiseTicketData?.reviewers}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                reviewers: e.target.value,
              });
            }}
            style={{ width: '100%' }}
          />
        }
      />

      <FormRow
        label={t('Priority')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_priority"
            labelInValue
            options={raiseTicketData.priority.map((statusItem:any) => ({
              label: statusItem.masterName,
              value: statusItem.masterName, // Adjust value as needed
            }))}
            placeholder="Ticket Priority"
            showSearch
            value={
              raiseTicketDataValue.priority.length > 0
                ? {
                    key: raiseTicketDataValue.priority[0].masterName,
                    label: raiseTicketDataValue.priority[0].masterName,
                    value: raiseTicketDataValue.priority[0].masterName,
                  }
                : undefined
            }
            onDropdownVisibleChange={(open) => {
              if (open) {
                console.log('selectedOption',open);
                const type='Priority'
                handleDropdownChange(type);
              }
            }}
                 onChange={(selectedOption) => {
                  console.log('selectedOption', selectedOption);
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
              
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  priority: selectedOption ? [{ masterName: selectedOption.label }] : [],
                });
                // Perform other actions using selectedOption
              }
            }}
            style={{ width: '100%' }}
          />
        }
      />
    </div>
  );
}
