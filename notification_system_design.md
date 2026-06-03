# Stage 1

## Notification APIs

### Create Notification

POST /api/notifications

Request Body:

```json
{
  "title": "Amazon Placement Drive",
  "type": "Placement",
  "message": "Amazon hiring for SDE roles"
}


---

### Get All Notifications

GET /api/notifications

Response:

```json
{
  "success": true,
  "notifications": []
}
```

---

### Get Top Notifications

GET /api/notifications/top?n=10

Response:

```json
{
  "success": true,
  "notifications": []
}
```



---

### Delete Notification

DELETE /api/notifications/:id

Response:

```json
{
  "success": true,
  "message": "Notification deleted"
}
```

---

## Real-Time Notification Strategy

For real-time notification delivery:

- WebSockets can be used for instant updates
- Notifications are prioritized using:
  - Placement > Result > Event
- Notifications are sorted using:
  - Priority
  - Timestamp

  ---

## Notification Schema

```json
{
  "id": 101,
  "title": "Amazon Placement Drive",
  "type": "Placement",
  "message": "Amazon hiring for SDE",
  "priority": 3,
  "createdAt": "2026-04-22T10:00:00Z"
}
```

# Stage 2

## Recommended Database

MongoDB is recommended for the notification system because:

- Flexible schema support
- High scalability
- JSON-like document storage

---

## Notification Collection Schema

```json
{
  "_id": "ObjectId",
  "studentId": 1042,
  "title": "Amazon Placement Drive",
  "type": "Placement",
  "message": "Amazon hiring for SDE roles",
  "priority": 3,
  "isRead": false,
  "createdAt": "2026-04-22T10:00:00Z"
}
```