
import { Route, Routes } from "react-router-dom";
import { LandningsSida } from "../pages/LandningsSida";
import { NotFound } from "../pages/NotFound";
import { OmOss } from "../pages/OmOss"
import { Kontakt } from "../pages/Kontakt"
/* import { Kunder } from "../pages/Kunder";  */
import { WebbUtveckling } from "../pages/WebbUtveckling"
import { Design } from "../pages/Design"
import { Branding } from "../pages/Branding"
import { HelhetsKoncept } from "../pages/HelhetsKoncept"
import { Erbjudanden } from "../pages/Erbjudanden"
import { OmOssSamarbete } from "../samarbete/pages/OmOssSamarbete";
import { Samarbete } from "../samarbete/pages/Samarbete";
import { Prislista } from "../samarbete/pages/Prislista";
import { SamarbeteKontakt } from "../samarbete/pages/SamarbeteKontakt";

export const MainRoutes: React.FC = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandningsSida/>}/>        
{/*         <Route path="/kunder" element={<Kunder/>}/> */}
        <Route path="/webbutveckling" element={<WebbUtveckling/>}/>
        <Route path="/branding" element={<Branding/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/helhetskoncept" element={<HelhetsKoncept/>}/>
        <Route path="/erbjudanden" element={<Erbjudanden/>}/>
        <Route path="/*" element={<NotFound/>}/>
        <Route path="/om-oss" element={<OmOss/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>

        <Route path="/samarbete/om-oss" element={<OmOssSamarbete/>}/>
        <Route path="/samarbete/prislista" element={<Prislista/>}/>
        <Route path="/samarbete/studio-mamama" element={<Samarbete/>}/>
         <Route path="/samarbete/kontakt" element={<SamarbeteKontakt/>}/>
        </Routes>
    </div>
  )
}

