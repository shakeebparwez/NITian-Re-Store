import React from 'react';
import { Modal } from "antd";

function Notifications({
    notifications = [],
    reloadNotifications,
    showNotifications,
    setShowNotifications,
}) {
    return (
        <Modal
            title="Notifications"
            open={showNotifications}
            onCancel={() => setShowNotifications(false)}
            footer={null}
            centered
            width={1000}
        >
            <div className="flex flex-col gap-2">
                {notifications.map((notification) => (
                    <div
                        className="flex flex-col border border-solid p-2 border-gray-300 rounded cursor-pointer"
                        key={notification._id}
                    >

                        <h1 className="text-gray-700">{notification.title}</h1>
                        <span className="text-gray-600">{notification.message}</span>

                    </div>
                ))}
            </div>

        </Modal>

    )
}

export default Notifications