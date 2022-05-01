from audioop import add
from types import NoneType
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
    

# scraper('https://covapp.vancouver.ca/parkfinder/FindFacilityType.aspx?InFT=44', "joggingTrails.json")



def parkScraper():
    data = open('parks.json')
    parkInfo = json.load(data)
    parks = []
    for i in range(1,222):
        page = requests.get("https://covapp.vancouver.ca/parkfinder/parkdetail.aspx?inparkid={}".format(i))
        soup = BeautifulSoup(page.content, "html.parser")
        name = soup.find('span', class_="LongText").text
        print(name)
        while True:
            try:
                location = soup.find('div', id='LiverpoolTheme_wt89_block_wtMainContent_WebPatterns_wt45_block_wtContent_WebPatterns_wt101_block_wtColumn2_WebPatterns_wt123_block_wtContent_WebPatterns_wt118_block_wtContent')
                address = location.contents[0]
                neighbourhood = location.contents[5]
                size = location.contents[7]
                image = soup.find_all('img')[2]['src']
                about = soup.find('div', id='LiverpoolTheme_wt89_block_wtMainContent_WebPatterns_wt124_block_wtContent').text
                features = soup.find_all('span', class_='FacilityName')
                washroom = soup.find_all('td', class_='TableRecords_OddLine')
                chips = []
                for feature in features:
                    chips.append(feature.text)
                washroomNotes = []
                for note in washroom:
                    washroomNotes.append(note.text)
                break
            except (AttributeError, IndexError):
                break

        for i in parkInfo:
            if i['fields']['name'] == name:
                coordinates = i['fields']['googlemapdest']
                washroom = i['fields']['washrooms']

                break

        park = {
            'name':          name,
            'address':       address,
            'neighbourhood': neighbourhood,
            'size':          size,
            'features':      chips,
            'washrooms':     washroom,
            'washroomInfo':  washroomNotes,
            'about':         about,
            'image':         image,
            'coordinates':   coordinates
        }
        parks.append(park)
    
    with open('parks2.json', "w") as outfile:
        json.dump(parks, outfile)
        

parkScraper()