// Private
/**
 * @readonly
 */
const RequestMethod_: { [key: string]: string; } = {
  Get: 'get',
  Post: 'post',
  Put: 'put',
  Patch: 'patch',
  Delete: 'delete'
};

/**
 * @readonly
 */
const ContentType_: { [key: string]: string; } = {
  Json: 'application/json',
  Xwwwform: 'application/x-www-form-urlencoded'
};

// Public (Also found in docs)

/**
 * The following scopes are currently supported:
 */
const Scope: { [key: string]: string; } = {
  ChatRead: 'chat.read',
  ChatWrite: 'chat.write',
  ChatWriteManage: 'chat.write_manage',
  Delegate: 'delegate',
  ForumWrite: 'forum.write',
  FriendsRead: 'friends.read',
  Identify: 'identify',
  Public: 'public'
};