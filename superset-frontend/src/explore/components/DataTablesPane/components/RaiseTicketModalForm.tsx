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
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { t, styled } from '@superset-ui/core';
import { Input, TextArea } from 'src/components/Input';
import FormRow from 'src/components/FormRow';
import { Select } from 'antd';
import { useDebounceValue } from 'src/hooks/useDebounceValue';

export function RaiseTicketModalForm({
  handleDropdownChange,
  handleSiteDropdownChange,
  handleFetchReviewersAndAssignTo,
  setRaiseTicketData,
  raiseTicketData,
  raiseTicketDataValue, setRaiseTicketDataValue
}: any) {

  const [searchAssignTo, setSearchAssignTo] = useState('');
  const [searchReviewers, setSearchReviewers] = useState('');
  const [searchValue, setSearchValue] = useState({
    assign: [],
    reviewer: [],
  });
  const debounceAssignTo = useDebounceValue(searchAssignTo, 500); //  fetching debounced value after 500ms.
  const debounceReviewers = useDebounceValue(searchReviewers, 500); //  fetching debounced value after 500ms.

  useEffect(() => {
    if (debounceAssignTo) {
      handleFetchReviewersAndAssignTo(debounceAssignTo)
        .then(data => {
          setSearchValue({ ...searchValue, assign: data });
        });
    }
  }, [debounceAssignTo]);

  useEffect(() => {
    if (debounceReviewers) {
      handleFetchReviewersAndAssignTo(debounceReviewers)
        .then(data => {
          setSearchValue({ ...searchValue, reviewer: data });
        });
    }
  }, [debounceReviewers]);

  return (
    <div>
      <FormRow
        label={t('label')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Input
            name="ticket_label"
            type="text"
            placeholder="Label"
            value={raiseTicketDataValue?.label}
            onChange={e => {
              setRaiseTicketDataValue({ ...raiseTicketDataValue, label: e.target.value });
            }}
            data-test="new-chart-ticket_label"
          />
        }
      />

      <FormRow
        label={t('Title')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Input
            name="ticket_title"
            type="text"
            placeholder="Title"
            value={raiseTicketDataValue?.title}
            onChange={e => {
              setRaiseTicketDataValue({ ...raiseTicketDataValue, title: e.target.value });
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
            value={raiseTicketDataValue?.description}
            onChange={e => {
              setRaiseTicketDataValue({
                ...raiseTicketDataValue,
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
            options={raiseTicketData.taskType.map((statusItem: any) => ({
              key: statusItem.id,
              label: statusItem.masterName,
              value: statusItem.id, // Adjust value as needed
            }))}
            placeholder={t('Task Type')}
            showSearch
            value={
              raiseTicketDataValue.taskType.length > 0
                ? {
                  key: raiseTicketDataValue.taskType[0].id,
                  label: raiseTicketDataValue.taskType[0].masterName,
                  value: raiseTicketDataValue.taskType[0].id,
                }
                : undefined
            }
            onDropdownVisibleChange={open => {
              if (open) {
                const type = 'Task Type';
                handleDropdownChange(type);
              }
            }}
            onChange={selectedOption => {
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  taskType: selectedOption
                    ? [{ masterName: selectedOption.label, id: selectedOption.value }]
                    : [],
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
            options={raiseTicketData.status.map((statusItem: any) => ({
              key: statusItem?.id,
              label: statusItem?.masterName,
              value: statusItem?.id, // Adjust value as needed
            }))}
            placeholder={t('Status')}
            showSearch
            value={
              raiseTicketDataValue?.status && raiseTicketDataValue?.status?.length > 0
                ? {
                  key: raiseTicketDataValue?.status[0]?.id,
                  label: raiseTicketDataValue?.status[0]?.masterName,
                  value: raiseTicketDataValue?.status[0]?.id,
                }
                : undefined
            }
            onDropdownVisibleChange={open => {
              if (open) {
                const type = 'Status';
                handleDropdownChange(type);
              }
            }}
            onChange={selectedOption => {
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  status: selectedOption
                    ? [{ masterName: selectedOption.label, id: selectedOption.value }]
                    : [],
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
            options={raiseTicketData?.natureOfTask?.map((statusItem: any) => ({
              label: statusItem?.masterName,
              value: statusItem?.id, // Adjust value as needed
            }))}
            placeholder={t('Nature of Task')}
            showSearch
            value={
              raiseTicketDataValue.natureOfTask.length > 0
                ? {
                  key: raiseTicketDataValue?.natureOfTask[0]?.id,
                  label: raiseTicketDataValue?.natureOfTask[0]?.masterName,
                  value: raiseTicketDataValue?.natureOfTask[0]?.id,
                }
                : undefined
            }
            onDropdownVisibleChange={open => {
              if (open) {
                const type = 'Nature of Task';
                handleDropdownChange(type);
              }
            }}
            onChange={selectedOption => {
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  natureOfTask: selectedOption
                    ? [{ masterName: selectedOption.label, id: selectedOption.value }]
                    : [],
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
            options={raiseTicketData.site.map((statusItem: any) => ({
              label: statusItem.mainSite,
              value: statusItem.mainSiteCode,
              // Adjust value as needed
            }))}
            placeholder={t('Site')}
            showSearch
            value={
              raiseTicketDataValue.site.length > 0
                ? {
                  label: raiseTicketDataValue.site[0].mainSite,
                  value: raiseTicketDataValue.site[0].mainSiteCode,
                }
                : undefined
            }
            onDropdownVisibleChange={open => {
              if (open) {
                handleSiteDropdownChange();
              }
            }}
            onChange={selectedOption => {
              console.log('!!!!!!$$$$$$', raiseTicketData.site);
              if (
                selectedOption &&
                typeof selectedOption === 'object' &&
                selectedOption !== null
              ) {
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  site: selectedOption
                    ? [{ mainSite: selectedOption.label, siteCode: selectedOption.value }]
                    : [],
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
            value={raiseTicketDataValue?.location}
            onChange={e => {
              setRaiseTicketDataValue({
                ...raiseTicketDataValue,
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
            mode="multiple"
            allowClear
            data-test="ticket_assign_to"
            labelInValue
            options={searchValue?.assign?.length && searchValue?.assign?.map(item => ({
              key: item?.empCode,
              label: item?.empName,
              value: item?.empCode,
            })) || []}
            placeholder={t('Assign To')}
            showSearch
            value={
              raiseTicketDataValue?.assignTo?.length > 0
                ? raiseTicketDataValue.assignTo.map(selectedOption => ({
                  key: selectedOption.empCode,
                  label: selectedOption.empName,
                  value: selectedOption.empCode,
                }))
                : undefined
            }
            onChange={selectedOptions => {
              if (Array.isArray(selectedOptions)) {
                setRaiseTicketDataValue({
                  ...raiseTicketDataValue,
                  assignTo: selectedOptions.map(option => ({
                    empCode: option.value,
                    empName: option.label,
                  })),
                });
                // Perform other actions using selectedOptions
              }
            }}
            onSearch={e => {
              setSearchAssignTo(e);
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
            mode="multiple"  // Add mode="multiple"
            options={(searchValue?.reviewer?.length && searchValue?.reviewer?.map(item => ({
              key: item?.empCode,
              label: item?.empName,
              value: item?.empCode,
            })) || [])}
            placeholder="Ticket Reviewer"
            showSearch
            value={raiseTicketDataValue?.reviewers?.length > 0
              ? raiseTicketDataValue.reviewers.map(reviewer => ({
                key: reviewer.empCode,
                label: reviewer.empName,
                value: reviewer.empCode,
              }))
              : undefined}
            onChange={selectedOptions => {
              setRaiseTicketDataValue({
                ...raiseTicketDataValue,
                reviewers: selectedOptions.map(selectedOption => ({
                  empCode: selectedOption.value,
                  empName: selectedOption.label,
                })),
              });
              // Perform other actions using selectedOptions
            }}
            onSearch={e => {
              setSearchReviewers(e);
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
            options={raiseTicketData.priority.map((statusItem: any) => ({
              label: statusItem.masterName,
              value: statusItem.id,
              key: statusItem.id,
            }))}
            placeholder="Ticket Priority"
            showSearch
            value={
              raiseTicketDataValue.priority.length > 0
                ? {
                  key: raiseTicketDataValue.priority[0].id,
                  label: raiseTicketDataValue.priority[0].masterName,
                  value: raiseTicketDataValue.priority[0].id,
                }
                : undefined
            }
            onDropdownVisibleChange={open => {
              if (open) {
                const type = 'Priority';
                handleDropdownChange(type);
              }
            }}
            onChange={selectedOption => {
              setRaiseTicketDataValue({
                ...raiseTicketDataValue,
                priority: selectedOption
                  ? [{ masterName: selectedOption.label, id: selectedOption.value }]
                  : null,
              });
            }}
            style={{ width: '100%' }}
          />
        }
      />
    </div>
  );
}
