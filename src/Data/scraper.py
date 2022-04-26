from audioop import add
import requests
from bs4 import BeautifulSoup
import json

def scraper(URL, fileName):
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    neighbourhoodSections = soup.find_all('div', class_="Panel")
    results = []
    for i in range(0, len(neighbourhoodSections)):
        currentNeighbourhood = neighbourhoodSections[i]
        neighbourhoodName = currentNeighbourhood.find('span', class_='Panel_title').text
        locations = currentNeighbourhood.find_all('tr')
        for x in range(0,len(locations)):
            park = locations[x]
            if park.find('span', class_="Bold") is None:
                continue
            name = park.find('span', class_="Bold").text
            address = park.find('td', class_='Address').text
            # count = park.find('td', class_='Count').text
            remarks = park.find('td', class_='Remarks').text

            location = {
                'name': name,
                'address': address,
                # 'count': count,
                'remarks': remarks,
                'coordinates': [],
                'neighbourhood': neighbourhoodName
            }
            results.append(location)
    
    with open(fileName, "w") as outfile:
        json.dump(results, outfile)
    

scraper('https://covapp.vancouver.ca/parkfinder/FindFacilityType.aspx?InFT=44', "joggingTrails.json")

