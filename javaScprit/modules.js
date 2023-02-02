//MODULES
//JavaScript modülleri, kodunuzu ayrı dosyalara ayırmanıza olanak tanır.
//Modüller, ifade ile harici dosyalardan içe aktarılır import.

<script type="module"></script>

//Named Exports and Default Exports.

person.js

//dış aktarmadan içe aktarmak
import { name, age } from "./person.js";

//varsayılan dışa aktarmalardan içe aktar
import message from "./message.js";