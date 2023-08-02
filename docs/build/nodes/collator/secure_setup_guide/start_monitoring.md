---
sidebar_position: 9
---

# 9. Run Monitor Dashboard

## Run Grafana dashboard

Now we get to the most visual part: the **monitoring dashboard**.

From the browser on your local machine, connect to the custom port on localhost that we have set at the beginning of this guide:

```
http://localhost:2022
```

<center>
<img src="https://i.imgur.com/AYAQCq9.png" border="1"></img>
</center>

Enter the default user `admin` and password `admin` then change the password.

<center>
<img src="https://i.imgur.com/s23MvU7.png" border="1"></img>
</center>

### Add data Sources

Open the _Settings_ menu:

<center>
<img src="https://i.imgur.com/IWu0NAR.png" border="1"></img>
</center>

Click on _Data Sources_:

<center>
<img src="https://i.imgur.com/pa97cJZ.png" border="1"></img>
</center>

Click on Add data source:

<center>
<img src="https://i.imgur.com/wGqRsD1.png" border="1"></img>
</center>

Select Prometheus:

<center>
<img src="https://i.imgur.com/jcb0kr0.png" border="1"></img>
</center>

Just fill the URL with http://localhost:9090 and click _Save & Test_.
Then add a new data source and search for Alert Manager

<center>
<img src="https://i.imgur.com/8yucyLh.png" border="1"></img>
</center>

Fill the URL with http://localhost:9093 and click _Save & Test_.

<center>
<img src="https://i.imgur.com/8kTsQcI.png" border="1"></img>
</center>

Now you have your 2 data sources set like that:

<center>
<img src="https://i.imgur.com/ET5OPjr.png" border="1"></img>
</center>


### Import the dashboard

Open the _New_ menu:

<center>
<img src="https://i.imgur.com/wLbnjGL.png" border="1"></img>
</center>

Click on _Import_:

<center>
<img src="https://i.imgur.com/dFIggF1.png" border="1"></img>
</center>

Select our favorite [dashboard 13840](https://grafana.com/grafana/dashboards/13840), we recommend using this dashboard because it's created by one of our Ambassadors and we don't want to fork this.  All credits go to him.

<center>
<img src="https://i.imgur.com/TrUCIGj.png" border="1"></img>
</center>

Select the Prometheus and AlertManager sources and click _Import_.Dashboard selection

<center>
<img src="https://i.imgur.com/awp0g63.png" border="1"></img>
</center>

In the dashboard selection, make sure you select:

* **Chain Metrics**: `polkadot` for a Polkadot/Kusama node or `substrate` for any other parachain node
* **Chain Instance Host:** `localhost:9615` to point the chain data scrapper
* **Chain Process Name**: the name of your node binary

And there you go, everything is set!

Monitoring dashboard [Polkadot Essentials](https://grafana.com/grafana/dashboards/13840)

<center>
<img src="https://i.imgur.com/MZVOvk5.jpg" border="1"></img>
</center>

Easy right? Consider saving the dashboard once parameters are set and working.

**Note**: you can also consider [Parity’s dashboards](https://github.com/paritytech/substrate/tree/master/scripts/ci/monitoring/grafana-dashboards) for advanced monitoring and analysis. 
