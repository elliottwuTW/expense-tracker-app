const getTodayMonth = require('./getTodayMonth')

function getFilterCondition(user, filterObj) {
  // read from filterObj
  const query = filterObj
  const category = (query === undefined ? null : query.category) || 'all'
  const sort = (query === undefined ? null : query.sort) || 'date'
  const period = (query === undefined ? null : query.period) || getTodayMonth()

  const findCondition =
    category === 'all'
      ? { userId: user._id }
      : { categoryValue: category, userId: user._id }

  let sortCondition = {}
  switch (sort) {
    case 'date':
      sortCondition = { date: 'desc' }
      break

    case 'amount':
      sortCondition = { amount: 'desc' }
      break

    default:
      break
  }

  return { findCondition, sortCondition, period, sort, category }
}

module.exports = getFilterCondition