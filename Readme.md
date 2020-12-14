# AORA Social - Readme



------

### Description

**AORA is a marketplace for fitness instructors and fitness-aware people who want to train anywhere, anytime. This touchpoint here is par of the mobile app, specifically the social medium part.**



------

### User Stories

- **404**: As an anon user I will see a 404 page if I try to reach a page that does not exist, so I'll know it's my bad
- **Splash**: A splash page will be up for 3 seconds after the app is loaded, for branding.
- **Signup**: As anon I will have to sign up in the platform to be able to access the class offer.
- **Login**: As a registered user, I can login to the platform to access the classes offer.
- **Logout**: As a user I can logout from the platform, so no one else can use it.
- **Classes**: As a user I can view the classes offer available for the next week.
- **Filter**: As a user I can narrow down my search by applying filters.
- **Class detai**l: As a user, I can participate in a conversation with other users who took the same class.
- **Comment**: As a user I can post a new comment to the conversation.
- **Replies**: As a user, I can see other user's replies to any particular user's comment.
- **Reply**: As a user, I can post my own reply to any particular user's comment or reply.



------

### Backlog

- Allow users to like any particular comment or reply
- **Likes**: Allow users to visit a list of likes to any of their comments or replies
- Customize company message to user on Class detail page
- Allow users to follow any user, by adding a button to comments and replies
- **Followers**: Allow users to visit a list of followers
- **Profile**: add a Profile section (and wrap all the above in a Classes section)
  - Profile pic
  - Name, last name and city
  - Number Following
  - Number of Followers
  - Display number of classes taken by category
  - Display / edit personal details (only for me)
    - Name
    - Lastname
    - City
    - Email
    - Password
- Allow users to see other user's profiles.



------

### Client / Frontend

#### React Router Routes (React App)

| Path                     | Component   | Permissions                | Behavior                                                     |
| ------------------------ | ----------- | -------------------------- | ------------------------------------------------------------ |
| `/`                      | Splash      | public `<Route>`           | Landing page                                                 |
| `/signup`                | Signup      | anon only `<AnonRoute>`    | Signup form, link to Login, go to Classes after signup       |
| `/login`                 | Login       | anon only `<AnonRoute>`    | Login form, link to Signup, go to Classes after login        |
| `/classes`               | Classes     | user only `<PrivateRoute>` | Show classes list for upcoming week, link to ClassDetail, link to Filter |
| `/filter`                | Filter      | user only `<PrivateRoute>` | Apply filters to narrow down classes list                    |
| `/classes/:class_id`     | ClassDetail | user only `<PrivateRoute>` | View conversation around a particular class, link to Comment, links to Replies, links to Reply |
| `/comment/add/:class_id` | AddComment  | user only `<PrivateRoute>` | Post a comment to the conversation in ClassDetail            |
| `/comment/:comment_id`   | Comment     | user only `<PrivateRoute>` | View comment and replies, link to Reply, links to Replies    |
| `/reply/:replyId`        | Reply       | user only `<PrivateRoute>` | View a reply and its replies                                 |



#### Components

**Page components**

- Splash
- Signup
- Login
- Classes
- Filter
- ClassDetail
- Comment
- AddComment
- Reply

**Other Components**

- OneClassItem
- FilterDropDown
- OneComment
- MyComment - same as OneComment but with *edit* and *delete* buttons and without *reply* button
- OneReply - same as OneComment, but loads replies, instead of comments
- MyReply - same as OneReply but, but with *edit* and *delete* buttons and without *reply* button
- OneBigReply - same as OneReply, but different layout, for Replies page
- MyBigReply - same as MyReply, but different layout, for Replies page



#### Services

- Auth Service

  - auth.login(user_id)
  - auth.signup(user_id)
  - auth.logout()
  - ? auth.me() ??????
  - ? auth.getUser() // synchronous ??????

- Class Service

  - class.list()
  - class.filter()
  - class.detail(class_id)

- Conversation Service

  - comments.list(class_id)
  - comments.add(class_id)
  - comments.edit(comment_id)
  - comments.delete(comment_id)
  - replies.list(comment_id)
  - replies.add(comment_id)
  - replies.edit(reply_id)
  - replies.delete(reply_id)

  



------

### Server / Backend

#### Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profilepic: {type: String},
  email: {type: String},
  city: {type:String},
  classes: [{type: Schema.Types.ObjectId, ref: "Class"}],
  isInstructor: {type: Boolean},
  followers: [{type: Schema.Types.ObjectId, ref: "User"}],
  following: [{type: Schema.Types.ObjectId, ref: "User"}],
}
```

Class model

```javascript
{
  classType: {type: String, required: true, enum: ["HIIT", "Strength", "Dance", "Yoga", "Pilates", "Spinning"], required: true},
  instructor: {type: Schema.Types.ObjectId, ref: "User", required: true},
  scheduled: {type: Date, required: true},
  duration: {type: Number, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
}
```

Comment model

```javascript
{
  author: {type: Schema.Types.ObjectId, ref: "User", required: true}, 
  commentBody: {type: String, required: true},
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
}
```

Reply model

```javascript
{
  author: {type: Schema.Types.ObjectId, ref: "User", required: true},
  replyBody: {type: String, required: true},
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}]
}
```



#### API Enpoints (backend routes)

| HTTP Method | URL                        | Request Body                                            | Success Status | Error Status | Description                                                  |
| ----------- | -------------------------- | ------------------------------------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/me`                 | Saved session                                           | 200            | 404          | Check if user is logged in and return Classes page           |
| POST        | `/auth/signup`             | {username, password}                                    | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`              | {username, password}                                    | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`             |                                                         | 204            | 400          | Logs out the user                                            |
| POST        | `/api/classes`             | {classType, instructor, scheduled, duration, comments } |                |              | Route created to manually create classes                     |
| GET         | `/api/classes`             |                                                         | 200            | 400          | Show all classes                                             |
| GET         | `/api/classes/:classId`    |                                                         | 200            | 400          | Show class detail                                            |
| POST        | `/api/comments`            | {commentBody, classId}                                  | 201            | 400          | Post a comment to a class, using the id of the currently logged-in user  (req.session.currentUser) |
| GET         | `/api/comments/:commentId` |                                                         | 200            | 400          | Show a comment and all its replies                           |
| DELETE      | `/api/comments/:commentId` |                                                         | 202            | 400          | Delete a comment                                             |
| PUT         | `/api/comments/:commentId` | {commentBody}                                           | 201            | 400          | Edit comment                                                 |
| POST        | `/api/replies/comments`    | {replyBody, commentId}                                  | 201            | 400          | Post a reply to a comment, using the id of the currently logged-in user (req.session.currentUser |
| POST        | `/api/replies/replies`     | {replyBody, parentReplyId}                              | 201            | 400          | Post a reply to another reply, using the id of the currently logged-in user  (req.session.currentUser |
| GET         | `/api/replies/:replyId`    |                                                         | 200            | 400          | Show a reply and all its replies                             |
| DELETE      | `/api/replies/:replyId`    |                                                         | 202            | 400          | Delete reply                                                 |
| PUT         | `/api/replies/:replyId`    | {replyBody}                                             | 201            | 400          | Edit reply                                                   |



------

## Links

**Trello**

http://



**Git**

Client repository link

Server repository link

Deployed app link



**Slides**

http://



