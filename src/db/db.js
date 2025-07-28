const currentYear = new Date().getFullYear();
const year = [];
for (let i = currentYear; i >= 1900; i--) {
  year.push(i);
}

const day = [];
for (let i = 1; i <= 31; i++) {
  day.push(i)
}

export const globalData = [
  {
    month: [
      { value: "Jan", title: "Jan", id: 1 },
      { value: "Feb", title: "Feb", id: 2 },
      { value: "Mar", title: "Mar", id: 3 },
      { value: "Apr", title: "Apr", id: 4 },
      { value: "May", title: "May", id: 5 },
      { value: "Jun", title: "Jun", id: 6 },
      { value: "Jul", title: "Jul", id: 7 },
      { value: "Aug", title: "Aug", id: 8 },
      { value: "Sep", title: "Sep", id: 9 },
      { value: "Oct", title: "Oct", id: 10 },
      { value: "Nov", title: "Nov", id: 11 },
      { value: "Des", title: "Des", id: 12 },
    ],
    day: day,
    year: year,
    desq1:
      "People who use our service may have uploaded your contact information to Facebook. Learn more.",
    desq2: `By clicking Sign Up, you agree to o Terms, Privacy Policy and Cookies Policy. You may receiv SMS Notifications from us and can opt out any time. Sign Up`,
  },
];
