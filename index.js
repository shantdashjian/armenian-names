const boyNames = ['Abaven', 'Abirad', 'Alan', 'Alec', 'Alex', 'Alexan', 'Aharon', 'Aghan', 'Aghasi', 'Agheksanter', 'Amir', 'Anag', 'Anania', 'Ananoun', 'Anastas', 'Antog', 'Antranig', 'Antrias', 'Anoushavan', 'Andon', 'Arnag', 'Arno', 'Adis', 'Adom', 'Adour', 'Adroushan', 'Apas', 'Apel', 'Apisoghom', 'Apkar', 'Apraham', 'Ara', 'Arine', 'Aram', 'Aramazt', 'Aramaniag', 'Aramais', 'Aran', 'Arantsar', 'Arakel', 'Ararad', 'Araz', 'Arbi', 'Arpag', 'Arpen', 'Arpoun', 'Arkam', 'Aren', 'Arek', 'Arevshad', 'Arzouman', 'Ared', 'Artoun', 'Ari', 'Aris', 'Arisdages', 'Ardzroun', 'Artsan', 'Arman', 'Armenag', 'Armen', 'Arshalouys', 'Arshak', 'Arsham', 'Arshavir', 'Arshen', 'Arsen', 'Ardag', 'Ardashes', 'Ardavast', 'Ardavan', 'Ardem', 'Arpiar', 'Artur', 'Artyom', 'Ashod', 'Asadour', 'Asbed', 'Asbourag', 'Asdvadzadour', 'Askanaz', 'Atam', 'Atanas', 'Atapeg', 'Avak', 'Avedis', 'Avedig', 'Ayk', 'Azad', 'Azaria', 'Azniv', 'Baghdasar', 'Bab', 'Babeg', 'Baben', 'Badouagan', 'Badrig', 'Barkev', 'Bared', 'Bartev', 'Barouyr', 'Barsam', 'Bedros', 'Berj,Berk', 'Bsag', 'Poghos', 'Boris', 'Beglar', 'Datev', 'Dajad', 'Daron', 'Davros', 'Dertad', 'Diana', 'Dikran', 'Dirayr', 'Diran', 'Diradour', 'Dzadour', 'Dzeroun', 'Dzovag', 'Dzaghig', 'Dzovinar', 'Donig', 'Ellis', 'Eshkhan', 'Esahag', 'Emin', 'Emmanouel', 'Etan', 'Edvard', 'Erik', 'Gakig', 'Gamsar', 'Gamo', 'Gaydzag', 'Karabed', 'Karen', 'Garbis', 'Garo', 'Giragos', 'Guregh', 'Gomidas', 'Gosdan', 'Gosdantin', 'Goryoun', 'Gdridg', 'Grigor', 'Gunar', 'Ghazar', 'Ghazaros', 'Gharib', 'Ghevont', 'Ghougas', 'Ghoungyanos', 'Genos', 'Hamazasb', 'Hamlet', 'Hamparzoum', 'Hayastan', 'Haig', 'Haygazoun', 'Haygaz', 'Haygag', 'Haygaram', 'Hayrabed', 'Hayrig', 'Hetoum', 'Hmayag', 'Hraztan', 'Hrag', 'Hrahad', 'Hrayr', 'Hrant', 'Hratch', 'Hravart', 'Hapet', 'Hagop', 'Harutyun', 'Haro', 'Hovagem', 'Hovasap', 'Hovhannes', 'Hovnan', 'Hovnatan', 'Hovsep', 'Hrach', 'Jannig', 'Jirayr', 'Jivan', 'Janik', 'Jero', 'Kapriel', 'Kachig', 'Kakig', 'Kazavon', 'Kaloust', 'Kamer', 'Kami', 'Karnig', 'Kasbar', 'Karekin', 'Karen', 'Kegham', 'Keghart', 'Keghon', 'Kersam', 'Kevork', 'Kissag', 'Kud', 'Kousan', 'Kourken', 'Krikor', 'Krisdapor', 'Khajag', 'Khatchadour', 'Khatcheres', 'Khatchig', 'Khigar', 'Khosrov', 'Khoren', 'Lernig', 'Levon', 'Libarid', 'Loris', 'Luca', 'Matous', 'Majag', 'Malkhas', 'Magar', 'Mampre', 'Mamigon', 'Manajihr', 'Manase', 'Mangasar', 'Manuel', 'Manough', 'Mashdots', 'Massis', 'Madat', 'Madteos', 'Markar', 'Margos', 'Mardig', 'Mardiros', 'Mardoun', 'Matsag', 'Melek', 'Melkon', 'Mekhag', 'Meghrig', 'Mesrob', 'Meroujan', 'Mjej', 'Miadzin', 'Mihran', 'Mihrtad', 'Minas', 'Misak', 'Mouron', 'Mikaiel', 'Mleh', 'Mkhitar', 'Mgrditch', 'Mgrdoum', 'Mher', 'Mnatsagan', 'Movses', 'Moushegh', 'Moushe', 'Mourad', 'Natan', 'Nazar', 'Nazaret', 'Nahabed', 'Nar', 'Narek', 'Navasart', 'Nbad', 'Nerseh', 'Nerses', 'Nigol', 'Nigoghos', 'Njteh', 'Norayr', 'Norhad', 'Norvan', 'Noubar', 'Nourhan', 'Noy', 'Nshan', 'Oksen', 'Ohan', 'Onnig', 'Oshin', 'Oshakan', 'Oda', 'Ovsanna', 'Papken', 'Pakrad', 'Pagour', 'Partogh', 'Partoghimeos', 'Parkhoutar', 'Parounag', 'Parsegh', 'Peklar', 'Penyamin', 'Pertag', 'Puzant', 'Purad', 'Paylag', 'Panig', 'Panos', 'Paren', 'Parnag', 'Paramaz', 'Pillibos', 'Potorik', 'Razmig', 'Raphael', 'Reteos', 'Robert', 'Rosdom', 'Rupen', 'Raffi', 'Sahag', 'Sami', 'Samvel', 'Samson', 'Sanasar', 'Sanatroug', 'Sandis', 'Sassoun', 'Sarkis', 'Sarhad', 'Saro', 'Sarven', 'Setrag', 'Sebouh', 'Serj', 'Serop', 'Serovpe', 'Sero', 'Sevag', 'Sevan', 'Set', 'Semag', 'Shant', 'Simon', 'Sinan', 'Sion', 'Sis', 'Sisag', 'Sirak', 'Sirekan', 'Sipan', 'Smpad', 'Sograd', 'Soghomon', 'Souren', 'Sourmag', 'Soukias', 'Stephan', 'Sos', 'Srabion', 'Sona', 'Talis', 'Taniel', 'Tavtag', 'Tavit', 'Terenig', 'Trasdamard', 'Tro', 'Takvor', 'Tateos', 'Tatoul', 'Tevan', 'Teotig', 'Tovmas', 'Torkom', 'Toros', 'Tsolag', 'Tsakig', 'Vazken', 'Vazrig', 'Vakhtang', 'Vahagn', 'Vahaken', 'Vahan', 'Vahe', 'Vahram', 'Vahrej', 'Vagharsh', 'Vagharshag', 'Vaghinag', 'Van', 'Vana', 'Vanagan', 'Vanant', 'Vanadour', 'Vanig', 'Vanoush', 'Vatche', 'Vasag', 'Vasbourag', 'Varak', 'Varaztad', 'Varant', 'Vart', 'Vartan', 'Vartavar', 'Vartivar', 'Vartkes', 'Varteres', 'Varos', 'Varoujan', 'Vicken', 'Vigen', 'Vram', 'Vrej', 'Vrtanes', 'Vosgan', 'Vosdanig', 'Yeghya', 'Yeghisheh', 'Yeghiazar', 'Yeprem', 'Yesayi', 'Yeranos', 'Yerimya', 'Yervant', 'Yetvart', 'Yeznig', 'Yezras', 'Zadig', 'Zareh', 'Zarzant', 'Zarmayr', 'Zarmig', 'Zaven', 'Zakariya', 'Zohrag', 'Zohrab', 'Zoravar']
const girlNames = ['Akabi', 'Azadouhi', 'Azkanoush', 'Azniv', 'Aline', 'Alice', 'Alik', 'Almasd', 'Alvart', 'Aghavni', 'Aida', 'Akac', 'Aldz', 'Alids', 'Alidz', 'Anahit', 'Anais', 'Ankine', 'Antaram', 'Ani', 'Anna', 'Annman', 'Anoush', 'Ashkhen', 'Asdghig', 'Adrine *Araz', 'Aramouhi', 'Araks', 'Araksi', 'Arkina', 'Areknaz', 'Arev', 'Arevig', 'Arevhad', 'Arevalous', 'Arine', 'Artzouig', 'Armanoush', 'Armenouhi', 'Armine', 'Arshalous', 'Arshagouhi', 'Arousyag', 'Arsine', 'Arda', 'Ardanoush', 'Arpenig', 'Arpenik', 'Arpi', 'Arpine', 'Arpineh', 'Ashkhen', 'Avids', 'Baydzar', 'Barzig', 'Berjanoush', 'Berjouhi', 'Datevig', 'Dalita', 'Dikranouhi', 'Dirouhi', 'Dzaghig', 'Dzaghganoush', 'Dziadzan', 'Dzovig', 'Dzovinar', 'Emasdouhi', 'Esgouhi', 'Elise', 'Eliz', 'Eghtsanoush', 'Emma', 'Endza', 'Endzanoush', 'Erato', 'Euphemia', 'Euphrosina', 'Eva', 'Gacia', 'Gadar', 'Gadarine', 'Gaiane', 'Garine', 'Gakavig', 'Gayane', 'Ghadam', 'Gorandoukht', 'Goulizar', 'Goulnaz', 'Gumach', 'Hagint', 'Hamaspouyr', 'Hamesdouhi', 'Hasmig', 'Haverj', 'Hayganoush', 'Haygouhi', 'Heghineh', 'Heghnar', 'Hera', 'Heranoush', 'Hermineh', 'Hereknaz', 'Hnazant', 'Houdit', 'Houri', 'Hourher', 'Houshig', 'Hranush', 'Hripsimeh', 'Hrout', 'Hrantouhi', 'Hranoush', 'Hratchouhi', 'Hrarpi', 'Hreghen', 'Isabel', 'Isabella', 'Jebid', 'Jbdouhi', 'Juliana', 'Kayaneh', 'Karni', 'Keghanoush', 'Keghetzig', 'Keghouhi', 'Keran', 'Kinevart', 'Klkhatir', 'Kohar', 'Koharig', 'Kaghtzrig', 'Knar', 'Knkoush', 'Khatchouhi', 'Khatoun', 'Khngeni', 'Khonarh', 'Khosrovanoush', 'Khosrovidookht', 'Khosrovitoughd', 'Khorodig', 'Khoumar', 'Khoyan', 'Lara', 'Lelag', 'Lena', 'Leniya', 'Lili', 'Lilit', 'Lucie', 'Lucy', 'Lori', 'Lorig', 'Louseres', 'Lousig', 'Lousine', 'Lousntak', 'Lousvart', 'Lusine', 'Mayda', 'Mayranoush', 'Manoushag', 'Madlene', 'Maral', 'Marem', 'Markrid', 'Marta', 'Margaret', 'Marie', 'Maria', 'Mariyam', 'Marineh', 'Maritsa', 'Maritza', 'Marmar', 'Maro', 'Medax', 'Meghety', 'Meghranoush', 'Melineh', 'Mirna', 'Nazani', 'Nazeli', 'Nazenig', 'Natel', 'Nayat', 'Nayree', 'Nayirouhi', 'Nane', 'Nanor', 'Nashkhoun', 'Nartouhi', 'Nare', 'Narineh', 'Nargiz', 'Narod', 'Negdar', 'Noyemi', 'Nora', 'Nvart', 'Noune', 'Nunuphar', 'Noushig', 'Nouritsa', 'Nver', 'Ovsanna', 'Ojeni', 'Pakradouhi', 'Palasan', 'Parantsem', 'Parouhi', 'Pavagan', 'Pergrouhi', 'Persape', 'Pouragn', 'Pouregh', 'Pourasdan', 'Patil', 'Payl', 'Parantzem', 'Pounig', 'Razmouhi', 'Raqel', 'Repega', 'Rehan', 'Rhiphsime', 'Rita', 'Rubina', 'Rozin', 'Rouzan', 'Rima', 'Sahaganoush', 'Satenig', 'Salpi', 'Sanam', 'Santoukhd', 'Sara', 'Seta', 'Selma', 'Serig', 'Serine', 'Sevana', 'Sevoug', 'Stepanie', 'Stephanie', 'Sibyl', 'Sima', 'Siran', 'Siranoush', 'Sirarpi', 'Siroun', 'Sirvart', 'Suzan', 'Soghome', 'Sona', 'Sussan', 'Soffi', 'Soffiya', 'Srpouhi', 'Sosi', 'Soseh', 'Sibylla', 'Sylva', 'Shahanig', 'Shamiram', 'Sharmagh', 'Shakeh', 'Shnorhig', 'Shoghagat', 'Shogher', 'Shoghig', 'Shoushan', 'Shoushanig', 'Taguhi', 'Talar', 'Takoush', 'Tarouhi Teghtsanig', 'Teghtsoun', 'Theodora Tsdrig', 'Takouhi', 'Taline', 'Tamar', 'Tania', 'Tangakin', 'Tsangali', 'Tsoler', 'Tsoline', 'Tshoghig', 'Tsvig', 'Titer', 'Vazkanoush', 'Vana', 'Vanouhi', 'Vanoush', 'Varvara', 'Varvare', 'Vartanoush', 'Varteni', 'Vartiter Rose-butterfly)', 'Vartivar', 'Varteshah', 'Vartouhi', 'Varsenig', 'Vehanoush', 'Vehantsnouhi', 'Verkine', 'Verjin', 'Vertchalous', 'Verjouhi', 'Vosgetel', 'Vosgedzam', 'Vosgehad', 'Vosgemad', 'Vosgi', 'Yeter', 'Yeghnig', 'Yeghisapet', 'Yeghsan', 'Yester', 'Yerazig', 'Yranig', 'Yeranuhi', 'Yerchanig', 'Yeva', 'Yevkeneh', 'Yeprouhi', 'Zarmig', 'Zanazan', 'Zabel', 'Zapel', 'Zartar', 'Zarmantoukht', 'Zarmineh', 'Zarmouhi', 'Zarouhi', 'Zarvart', 'Zepour', 'Zmroukhd', 'Zoulal', 'Zvart', 'Zaven']
const allNames = [...boyNames, ...girlNames]
const boyNamesLength = boyNames.length
const girlNamesLength = girlNames.length
const allNamesLength = allNames.length

function getBoyNames() {
  return [...boyNames]
}

function getGirlNames() {
  return [...girlNames]
}

function getAllNames() {
  return [...allNames]
}

function getRandomBoyName() {
  return getRandomNameFrom(boyNames)
}

function getRandomGirlName() {
  return getRandomNameFrom(girlNames)
}

function getRandomName() {
  return getRandomNameFrom(allNames)
}

function getRandomBoyNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getBoyNames(), start)
}

function getRandomGirlNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getGirlNames(), start)
}

function getRandomNameThatStartsWith(start) {
  return getRandomNameFromThatStartsWith(getAllNames(), start)
}

// Internal functions, not to be exported
function getNamesThatStartsWith(names, start) {
  start = start.toLowerCase()
  return names.filter(item => item.toLowerCase().startsWith(start))
}

function getRandomNameFrom(names) {
  return names[Math.floor(Math.random() * names.length)]
}

function getRandomNameFromThatStartsWith(names, start) {
  start = start.toLowerCase()
  const allMatches = getNamesThatStartsWith(names, start)
  if (allMatches.length === 0) return ''
  
  let name
  while(true) {
    name = getRandomNameFrom(allMatches)
    if (name.toLowerCase().startsWith(start)) {
      break
    }
  }
  return name
}

module.exports = {
  boyNamesLength,
  girlNamesLength,
  allNamesLength,
  getBoyNames,
  getGirlNames,
  getAllNames,
  getRandomBoyName,
  getRandomGirlName,
  getRandomName,
  getRandomBoyNameThatStartsWith,
  getRandomGirlNameThatStartsWith,
  getRandomNameThatStartsWith
}



