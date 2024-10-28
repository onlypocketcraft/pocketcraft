const searchCourses = (search) => {
  const courses = [
    {
      title: 'PocketBasics',
      description: 'The basics of PocketBase',
    },
    {
      title: 'PocketHost',
      description: 'The basics of PocketHost',
    },
  ]
  //   const { findRecordsByFilter } = require('pocketpages')
  //   const courses = findRecordsByFilter('courses', {
  //     filter: `title ~ "${search}"`,
  //   })
  return courses
}

module.exports = { searchCourses }
