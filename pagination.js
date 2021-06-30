const apps = require("./app-seed");

const filteredOrders = ["asc", "desc"];
const maxDefault = 50;

function getIndex(by, start) {
  let value;

  if (by === "id") {
    start = Number(start);
  }

  for (let i = 0; i < apps.length; i++) {
    let app = apps[i];

    if (by === "id" && app.id === start) {
      value = i;
      break;
    }

    if (by === "name" && app.name === start) {
      value = i;
      break;
    }
  }

  return value;
}

function paginatedApps(by, start, end, max, order) {
  if (!by) {
    return ['The key "by" is required'];
  }

  if (by !== "id" && by !== "name") {
    return ['The key "by" permits only "id" or "name"'];
  }

  // Check for undefined
  max = Number(max || maxDefault);
  // Check if max 50 is passed
  max = max > maxDefault ? maxDefault : max;

  start = start ? start : by === "id" ? 1 : apps[0].name;
  start = getIndex(by, start);

  end = end ? end : by === "id" ? apps.length : apps[apps.length - 1].name;
  end = end || apps.length;
  end = getIndex(by, end);

  const filteredApps = [];

  for (let i = start; i < end; i++) {
    filteredApps.push(apps[i]);

    if (filteredApps.length === max) {
      break;
    }
  }

  if (!filteredOrders.includes(order)) {
    return filteredApps;
  }

  const isAsc = order === "asc";

  const sorter = (a, b) => {
    if (a[by] < b[by]) {
      return isAsc ? -1 : 1;
    }

    if (a[by] > b[by]) {
      return isAsc ? 1 : -1;
    }

    return 0;
  };

  filteredApps.sort(sorter);

  return filteredApps;
}

module.exports = { getIndex, paginatedApps };
