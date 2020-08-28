// Code your solution here

function findMatching (drivers,name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list,letters) {
  let lengthOfName = letters.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === letters;
  });
}

function matchName (drivers,name) {
  return drivers.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}