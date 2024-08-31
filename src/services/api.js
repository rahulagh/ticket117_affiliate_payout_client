// api.js
const mockNotifications = [
    {
      id: 1,
      type: 'payment',
      title: 'Payout Generated',
      message: 'Your earnings of $500 have reached the payout threshold. Expected payment date: 2024-09-05.',
      timestamp: new Date('2024-08-30T10:00:00Z').toISOString(),
      read: false,
    },
    {
      id: 2,
      type: 'product',
      title: 'New Product Added',
      message: 'A new product "Super Gadget" has been added to the affiliate program. Click here to view and promote.',
      timestamp: new Date('2024-08-29T14:30:00Z').toISOString(),
      read: false,
    },
    {
      id: 3,
      type: 'commission',
      title: 'Commission Rate Change',
      message: 'The commission rate for "Amazing Widget" has changed from 5% to 7%. Update your promotions accordingly.',
      timestamp: new Date('2024-08-28T09:15:00Z').toISOString(),
      read: true,
    },
  ];
  
  export const fetchNotifications = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockNotifications);
      }, 500);
    });
  };
  
  export const markNotificationAsRead = (notificationId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 200);
    });
  };