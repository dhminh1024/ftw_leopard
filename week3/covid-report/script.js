const getCovidStats = async () => {
  document.querySelector("#loading").textContent = "Loading data...";
  try {
    const response = await fetch("https://api.covid19api.com/world/total");

    if (response.ok) {
      const data = await response.json();
      document.querySelector("#cases").textContent = data.TotalConfirmed;
      document.querySelector("#deaths").textContent = data.TotalDeaths;
      document.querySelector("#recovered").textContent = data.TotalRecovered;
      document.querySelector("#error").textContent = "";
    } else {
      document.querySelector("#error").textContent = "Server response error";
    }
  } catch (error) {
    console.log(error.message);
  }
  document.querySelector("#loading").textContent = "";
};

getCovidStats();
