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
import React from 'react';
import { t, styled } from '@superset-ui/core';
import { Input, TextArea } from 'src/components/Input';
import FormRow from 'src/components/FormRow';
import { Select } from 'antd';

export function RaiseTicketModalForm({
  raiseTicketData,
  setRaiseTicketData,
}: any) {
  return (
    <div>
      <FormRow
        label={t('Task Type')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Input
            name="ticket_task_type"
            type="text"
            placeholder="Task Type"
            value={raiseTicketData?.taskType}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                taskType: e.target.value,
              });
            }}
            data-test="ticket_task_type"
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
        label={t('Status')}
        labelAlignment={{ textAlign: 'left' }}
        control={
          <Select
            allowClear
            data-test="ticket_status"
            labelInValue
            options={[]}
            placeholder={t('Status')}
            showSearch
            value={raiseTicketData?.status}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                status: e.target.value,
              });
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
            options={[]}
            placeholder={t('Nature of Task')}
            showSearch
            value={raiseTicketData?.natureOfTask}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                natureOfTask: e.target.value,
              });
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
            options={[]}
            placeholder={t('Site')}
            showSearch
            value={raiseTicketData?.site}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                site: e.target.value,
              });
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
            options={[]}
            placeholder="Ticket Priority"
            showSearch
            value={raiseTicketData?.prioriy}
            onChange={e => {
              setRaiseTicketData({
                ...raiseTicketData,
                priority: e.target.value,
              });
            }}
            style={{ width: '100%' }}
          />
        }
      />
    </div>
  );
}
