import * as React from "react"
import { Layout } from "../components"
import Seo from "../components/_seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/csapat.module.scss"

const Csapat = () => (
  <Layout>
    <Seo title="A csapat" />
    <div className="container">
      <h1>A csapat</h1>
    </div>
    <section>
      <div className="container">
        <StaticImage
          src="../images/csapat.jpg"
          alt="kép a csapatról"
          objectFit="cover"
          objectPosition="center center"
          placeholder="tracedSVG"
          loading="eager"
          quality="100"
          style={{
            width: "100%",
            overflow: "visible",
            minHeight: "300px",
            maxHeight: "538px",
          }}
        />
        <div className={styles.csapatInfo}>
          <p>
            A csapat története valamikor 1999-ben kezdődött. Akkor már a
            jelenlegi társaság magja két éve hetente összejárt játszani a Közgáz
            Kinizsi utcai termébe. A csapat krémjét kezdetben néhány közgázos és
            az almádi gimnáziumból Budapestre kerülő baráti társaság alkotta.
            Később a játék szeretetéből fakadóan néhányan úgy gondolták, hogy a
            palánk nélküli, kispályás ütögetés után érdemes lenne komolyan
            megpróbálkozni ezzel a sporttal. Első lépésként – saját egyesület
            híján – többen kipróbálták magukat az akkor már OB I-ben játszó Ares
            HC B csapatában, így megismerkedhettek a versenyszerű floorball
            világával. A 2000-es év sorsdöntőnek bizonyult, hiszen a Magyar
            Floorball Szakszövetség az országos bajnokság mellett létrehozta a
            sokkal lazább feltételeket támasztó Budapest Bajnokságot, amely
            lehetőséget teremtett az újonnan formálódó csapatoknak. A bajnokság
            rajtjánál természetesen a csapat is jelen volt, igaz, akkor még
            Közgáz néven indult a bajnokságban. Ugyanebben az időben sok babér
            nem termett az újonc csapatnak a jóval felkészültebb, képzettebb
            csapatok ellenében. Az eleinte oly gyakori vereségek azonban nem
            vették el a játékosok önbizalmát, sőt a sikertelenségek vértezték
            fel a csapat tagjait azzal a mentalitással, ami a mai napig jellemzi
            a Torpedot: mi soha nem adjuk fel! Azért ekkoriban is értünk el
            részsikereket, az évad legeredményesebb játékosát is a csapat adta:
            Szakács Peti nevét rettegték az ellenfelek védői. A 2001-ben
            újjáformálódó nyolccsapatos Országos Bajnokság rajtjánál már
            természetes volt a közben egyesületté formálódó, végleges nevét
            megtaláló Torpedo megjelenése. Ekkorra már a hétvégeken
            megrendezésre kerülő kétnapos kupákról és számos versenyről már
            sokan megismerték a lelkes társaságot. A Torpedo országszerte
            kivívta a játékosok és a floorballbarátok rokonszenvét, a pályán
            magatartásával, az elmaradhatatlan bulikon pedig garantáltan jó
            hangulatával. A következő években a Torpedo Justitia SC folyamatosan
            együtt fejlődött a magyar floorballal, és lassan komoly csapattá
            nőtte ki magát. Az egyre növekvő konkurencia, a megjelenő
            többcsoportos OB 2 majd OB 3, az újabb és újabb feltörekvő csapatok
            ellenére is megőrizte első osztályú tagságát. Eközben öt egymást
            követő évben lett az ország hetedik legjobb csapata. Az évente
            megrendezésre kerülő Magyar Kupában két alkalommal is elődöntős volt
            a csapat, és egyéb kupákban is jelentős sikereket ért el. Talán a
            csapat mégis attól lett a leghíresebb, hogy egymás után három évben
            is legyőztük bajnoki mérkőzésen a közben magyar szinten
            egyeduralkodó, válogatott játékosok sorát felsorakoztató, sokszoros
            bajnok TopFloor együttesét. Egyéni sikereink is akadtak szép
            számmal. A 2002-ben egyetemi világbajnokságon negyedik helyezett
            magyar válogatottban a Torpedo három fővel képviseltette magát. Sőt,
            az örökös csapatkapitány, László Bálint, azaz Bálna, illetve Varga
            Miklós még a felnőtt válogatottban is bemutatkozhatott.
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default Csapat
