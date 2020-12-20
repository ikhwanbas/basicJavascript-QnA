const whenWasItPosted = date => {
  // do code here
  var inputDate = new Date(date)

  const inputMonth = inputDate.getMonth() + 1
  const inputYear = inputDate.getFullYear()
  const inputsDate = inputDate.getDate()

  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDate = new Date().getDate()

  if (currentYear == inputYear) {

    if (currentMonth == inputMonth) {
      const a = currentDate - inputsDate

      if (a < 7) {
        return a + ' day ago'
      } else {
        const result = Math.floor(a / 7)
        return result + ' week ago'
      }

    } else if (inputMonth == (currentMonth - 1)) {
      const a = currentDate + 30 - inputsDate

      if (a <= 30) {

        if (a < 7) {
          return a + ' day ago'
        } else {
          const result = Math.floor(a / 7)
          return result + ' week ago'
        }

      } else {
        const result = currentMonth - inputMonth
        return result + ' month ago'
      }

    } else {
      const result = currentMonth - inputMonth
      return result + ' month ago'
    }

  } else {
    const result = currentYear - inputYear + ' year ago'
    return result
  }
}


// do not change this code below
const test = (testCase, result) => console.log(testCase == result);

test(whenWasItPosted("3 January 2020"), '11 month ago')
test(whenWasItPosted("26 November 2020"), '2 week ago')
test(whenWasItPosted("11 December 2020"), '3 day ago')
test(whenWasItPosted("2 December 2019"), '1 year ago')
test(whenWasItPosted("24 October 2000"), '20 year ago')