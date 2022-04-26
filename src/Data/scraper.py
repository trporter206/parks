from audioop import add
import requests
from bs4 import BeautifulSoup
import json

URL = "https://covapp.vancouver.ca/parkfinder/FindFacilityType.aspx?InFT=1"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

names = soup.find_all('span', class_='Bold')
addresses = soup.find_all('td', class_='Address')
counts = soup.find_all('td', class_='Count')
remarks = soup.find_all('span', class_='ListRecords')[1:]
baseballParks = []

for i in range(0,len(names)):
    park = {
        'name': names[i].text,
        'address': addresses[i].text,
        'count': counts[i].text,
    }
    baseballParks.append(park)

with open("baseballDiamonds.json", "w") as outfile:
    json.dump(baseballParks, outfile)