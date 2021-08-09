// Format Goal:
// CDU: XXX
// UFCs Count: 43
// UFCS Mapped: XXXXXXXX ZZZZZZZZ WWWWWWWW

const jsonData = [{"cduAccessCode":"AECB3AEC","ufcAccessCode":"3PI1E42I"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"5I1KQGHN"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"IB1D1V1E"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"NCY3MRMZ"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"75TCDVHU"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"R7IMURIW"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"SIZZHWWK"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"2VKJVXRM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"QIASGH8X"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"6VUB9UHM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"VA4LUVRN"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"IRKRED9E"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"DNW4G4ZM"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"1MC9JG57"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"6DYJSWA2"},{"cduAccessCode":"AECB3AEC","ufcAccessCode":"LEILSNE8"},{"cduAccessCode":"4127E445","ufcAccessCode":"PUQEC3UB"},{"cduAccessCode":"4127E445","ufcAccessCode":"JM3ZTNIB"},{"cduAccessCode":"4127E445","ufcAccessCode":"EWME3TKN"},{"cduAccessCode":"4127E445","ufcAccessCode":"E9SW868J"},{"cduAccessCode":"4127E445","ufcAccessCode":"J4IMAVK5"},{"cduAccessCode":"4127E445","ufcAccessCode":"GI7YZIBV"},{"cduAccessCode":"4127E445","ufcAccessCode":"HXAQWMKE"},{"cduAccessCode":"4127E445","ufcAccessCode":"N5KBY8FD"},{"cduAccessCode":"4127E445","ufcAccessCode":"4DFF4P3X"},{"cduAccessCode":"4127E445","ufcAccessCode":"3IGV6JTS"},{"cduAccessCode":"4127E445","ufcAccessCode":"D1LWW5CM"},{"cduAccessCode":"4127E445","ufcAccessCode":"AFC5HRQU"},{"cduAccessCode":"4127E445","ufcAccessCode":"V1ENUNWC"},{"cduAccessCode":"4127E445","ufcAccessCode":"BC979JVE"},{"cduAccessCode":"4127E445","ufcAccessCode":"GAJPQDTN"},{"cduAccessCode":"4127E445","ufcAccessCode":"KKLJEVF3"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"ESEF1DNJ"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"DYSMHXWP"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"A5R56XMG"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"J5DLFKG5"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"UDYY71EF"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"1EJ3S827"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"NWDTUHNL"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"SWCVGZNJ"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"RSNRV3ST"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"HH5JZK9W"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"RI7SSEPR"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"NMPXI6NY"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"PL8H2EX7"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"73YT8I8T"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"F2N6YV6X"},{"cduAccessCode":"VICR7T3J","ufcAccessCode":"UXHQBNHY"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZXVPKA5B"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"R2ARKS2U"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"56KFL7JI"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZLGHKVHS"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"W7KCAIFX"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"YG97QVL8"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"J69XX4D5"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"IP49P1MT"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"PQHS1PYS"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"EFR522L2"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"DVPQ8U6S"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"I8F4JUBG"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"ZXAJCQ3A"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"LZE4NYXD"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"T5UENQJG"},{"cduAccessCode":"6V3LPVZC","ufcAccessCode":"I1QSYA7P"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"L1SBNIH3"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"PS7PT4XA"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"HBD5FU1N"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"TKTK493Z"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"DB2DY9SM"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"3CPBA3XS"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"KBLEJ6QP"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"635PFAJR"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"JKEDS78D"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"DSZ4CNHZ"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"UQ889A8M"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"MZAGXG65"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"56HBWGBR"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"L5YTJ2B5"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"EZN1HYKZ"},{"cduAccessCode":"MXKZBWXI","ufcAccessCode":"H6V82JBS"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"I2LLVRHR"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"QT54DNII"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"9VBKWZG8"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"BDTZWD5Q"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"LXN4CM1S"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"ADUNM11H"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"W896CTDM"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"MRWADZUE"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"RTI6DU7C"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"6AIW1YZT"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"KPVKYRAY"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"B99ELC51"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"XFF2F21Q"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"JJAMPXNC"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"4BA4EN18"},{"cduAccessCode":"RWM2NA1C","ufcAccessCode":"6VZT3TMS"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"7YVMDLI3"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"5HFYPBWL"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"4W6HSINU"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"CM1R6VSR"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"3EPHMFWZ"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"BTUBGCW5"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"H7M8RJXQ"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"2KCXX64H"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"317J281Y"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"UP5LB79U"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"C3LV7RBW"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"RZ3G9GMG"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"WZIQNJ1F"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"D7MJ1CNS"},{"cduAccessCode":"UYMFCN7M","ufcAccessCode":"TGADJMUT"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"IQYVNPHV"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"S7J8E8VA"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"3HI46B4Z"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"IAIGQ3XI"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"V48PDDIL"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"BJKLZVIC"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"LC8JG5KR"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"FLGDQ596"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"9IRUKRXN"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"C1SSZ1VX"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"SJJD3LQA"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"BL7X1FHW"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"BP265E92"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"GCVNLNW6"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"2IUB6JDX"},{"cduAccessCode":"QB2SYTKJ","ufcAccessCode":"YDDBLZG8"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"ZYHKVBJE"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"IVGKGCC3"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"CG65MZXR"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"M8EKVT6T"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"UWZF9GVF"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"EV9F2WDT"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"9NCMCYN2"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"8F39QFL8"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"FKAMD7P3"},{"cduAccessCode":"DELDV31Q","ufcAccessCode":"X6Q4FSPX"}];
const coaches = {};

jsonData.forEach((userMapped) => {
    if(! (userMapped.cduAccessCode in coaches)) {
        coaches[userMapped.cduAccessCode] = { users : [] } 
    }
    coaches[userMapped.cduAccessCode].users.push(userMapped.ufcAccessCode);
});

const keys = Object.keys(coaches);
const values = Object.values(coaches);
const mappedDiv = document.getElementById('mapped-results');


for (coach in coaches) {
    const coachDiv = document.createElement('div')
    coachDiv.setAttribute('class', 'CARD')
    const cduP = document.createElement('p');
    cduP.textContent = `CDU: ${coach}`
    const ufcCount = document.createElement('p');
    const usersArray = coaches[coach].users;
    ufcCount.textContent = `UFC Count: ${usersArray.length}`
    const ufcUl = document.createElement('ul');
    ufcUl.textContent = `UFCs MAPPED: `;
    mappedDiv.appendChild(coachDiv);
    coachDiv.appendChild(cduP);
    coachDiv.appendChild(ufcCount);
    coachDiv.appendChild(ufcUl);
    for (ufc in usersArray) {
        let li = document.createElement("li");
        li.textContent = `${usersArray[ufc]}`
        ufcUl.appendChild(li);
    }
}


// TODO: Print to DOM or export to CSV
// TODO: Host page on GH Pages

