const { searchCourses } = require('../../_private/lib/getCourses')

module.exports = function (context) {
  const { formData, print } = context
  const { search } = formData
  const courses = searchCourses(search)
  return { courses }
}
