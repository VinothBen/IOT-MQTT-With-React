import React, { useEffect, useState } from 'react';
import { Card, List } from 'antd';

const Receiver = ({ payload }) => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (payload.topic) {
      setMessages(messages => [...messages, payload])
    }
  }, [payload])

  const renderListItem = (item) => (
    <List.Item>
      <List.Item.Meta
        title={item.topic}
        description={item.message}
      />
    </List.Item>
  )
  const newArrayMsg = messages.reverse();
  return (
    <Card
      title="Receiver"
    >
      <List
        size="small"
        bordered
        dataSource={newArrayMsg}
        renderItem={renderListItem}
      />
    </Card>
  );
}

export default Receiver;
