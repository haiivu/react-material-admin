const mock = {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
    }
  ],
  bigStat: [
    {
      product: "Bài đăng",
      total: {
        monthly: 4232,
        weekly: 1465,
        daily: 199,
        percent: { value: 3.7, profit: false }
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: 33, profit: true }
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true }
      }
    },
    {
      product: "Thành viên mới",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false }
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false }
      }
    },
    {
      product: "RNS",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false }
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true }
      }
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
          'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
          '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  table: [
    {
      id: 0,
      tên: "Thái Thoại Thông",
      email: "thongtt@fpt.edu.vn",
      sđt: "0123456789",
      status: "Online"
    },
    {
      id: 1,
      tên: "Huỳnh Ngọc Thanh Lam",
      email: "lamhnt@fpt.edu.vn",
      sđt: "0123456789",
      status: "Online"
    },
    {
      id: 2,
      tên: "Đỗ Minh Đức",
      email: "ducdm@fpt.edu.vn",
      sđt: "0123456789",
      status: "Online"
    },
    {
      id: 3,
      tên: "Vũ Đình Hải",
      email: "haivd@fpt.edu.vn",
      sđt: "0123456789",
      status: "Online"
    },
  ],
  job:[
    {
      id: 0,
      tên: "Hotel Management System",
      status: "Done"
    },
    {
      id: 1,
      tên: "Bank Management System",
      status: "Done"
    },
    {
      id: 2,
      tên: "Hostel Management System",
      status: "Done"
    },
    {
      id: 3,
      tên: "Motel Management System",
      status: "Done"
    },
    {
      id: 4,
      tên: "Rental Management System",
      status: "Done"
    },
  ],
};

export default mock;