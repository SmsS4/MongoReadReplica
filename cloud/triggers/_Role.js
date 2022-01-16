/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

Parse.Cloud.beforeFind(Parse.Role, async (request) => {
  const { object } = request;
  // request.readPreference = 'SECONDARY';
  // request.subqueryReadPreference = 'SECONDARY';
  // request.includeReadPreference = 'SECONDARY';
});
