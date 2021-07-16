/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'grid',
    type: 'render-grid',
    order: 1,
    group: '布局',
    styles: ['size', 'margin', 'padding'],
    props: {
        // gutter: {
        //     type: 'number',
        //     val: 1
        // },
        'margin-horizontal': {
            type: 'number',
            val: 0
        },
        'margin-vertical': {
            type: 'number',
            val: 0
        }
        // flex: {
        //     type: 'boolean',
        //     val: false
        // },
    },
    slots: {
        default: {
            type: ['column'],
            tips: '每一列栅格宽度占比为该列配置值占总列配置值的百分比，建议总列配置值为 12 或 24',
            val: [
                { span: 1, children: [] },
                { span: 1, children: [] }
            ]
        }
    }
}
