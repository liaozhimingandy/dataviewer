(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('昆山市', {
        "type": "FeatureCollection", "features": [{
            "type": "Feature",
            "id": "320583",
            "properties": {"name": "昆山市", "cp": [120.980736, 31.385597], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@GACASDEBWFMBSBYDCAEAGAICGAE@AAC@A@MDA@MASAA@AAA@AAAACCAAAAACAC@A@A@CCCEE@@AAA@AAA@@CCCA@A@@A@ACBGFAA@@A@A@A@A@@@@@@@@@@@@B@@@@A@AB@@DBA@ADCBGDSJMFKB@N@BAJ@F@N@BBBJ@B@B@@F@BAH@F@B@BA@@B@@BB@@BB@B@B@@A@AB@@@@A@@@@@A@@@@BA@@@@A@@EDAAABGBEFCBJTHN^FLHB@LHPFHFHDHBRBHCFADAD@BHF@@DF@HAH@D@BFF@AF@DABFB@FC@AD@B@@@@CJ@@@@@BAB@@C@AB@BAB@@C@AAA@@D@BAFBBBBD@BB@B@B@@@@A@C@AD@@CAAJAB@BAD@@@BA@BB@BABAB@B@B@D@@@@@BBB@@D@@@@BA@@@E@BD@@AFD@@@DD@@@BGA@DD@@@D@@B@B@BE@@BC@@D@B@@AB@DABA@A@EBABA@@NADADAD@@ABADAB@B@@GNERCJCF@JCLCNG\\CAAFEACDFBADOAB@EAADC@@BOC@HFDE^@BFV@FBNDPH\\BD@@DHDT@RK^ADAJADGHAB@BAB@BE@@DA@@@AB@BBFBF@H@B@@@@A@A@A@A@DB@@@B@@@B@@CAA@@B@D@B@@ABC@@BA@@@@B@@@BB@BBF@B@@BBB@@A@BB@DB@D@@@@A@@B@@BB@@@B@F@LBJ@RBB@DBFA@C@@ACCB@GB@@DD@BK@@A@A@@@BBA@A@@@@@@AC@@BC@@A@@@@D@BAB@@@AA@@AA@ADBB@BAB@@@FBB@@EF@@D@@F@D@BAF@BEB@@BBJC@@F@BNE@BEB@DFABBC@BBC@BB@@BBABB@AB@BB@AB@FF@@BA@@BD@@BD@@HB@@@@B@@B@BAD@@@BBB@BB@@@BAB@@BDHCBB@@BB@ABB@@B@HCDFCD@BAB@BD@B@DADC@AEGEEAAAAFGDBVHDKAAJGBDHDJDFDHFHD@A@CD@@EBEE@BAB@BGDBBEB@@@BBABDBDMH@DIB@@C@@@CD@@CCA@AFB@AB@@AB@@@@@@DB@@@BBD@@@D@DA@CBABABA@@B@BBB@@@B@@ABADBB@@A@BBCFDBBJF@@B@BADELFDGFBBCDBD@DAB@CBBBDABDD@@CAA@EHEAAFEFB@CECC@AA@ABAAA@ABACC@AAA@C@AC@@CA@A@@GD@@C@A@A@A@@HCHABAH@AAACCCEABE@GDA@@@@@CB@AEH@BCJABBB@D@D@DBJEBCBABABBFC@@DB@BBBDBDBBBB@B@B@B@@ABGD@@CH@@CB@NHFHDFDDB@B@B@DCHEBAFIDCCABA@@@@MEACACL@AIACCEAACE@E@CAA@@@C@AD@DGBAB@BA@BDB@BBB@BB@@@@@B@@@@A@@FSB@DKA@FO@@@@@A@A@ABC@@@@@A@C@@@A@AA@BA@@AA@@B@BAAA@@@CB@D@@@B@@AB@BBD@DB@ABABA@ABAA@C@@GF@B@B@BAFBB@DBB@@@@A@A@@@A@@AABA@@@A@@@A@A@@@AA@BAB@AABA@@B@@AB@AAB@@A@AA@AAB@B@@A@AA@@@A@@A@A@@@A@@AA@@A@@A@@@AA@@@A@@A@@@A@A@@BA@A@@@A@@@A@A@@BAAAB@@A@A@A@A@ABAAABAB@B@B@NBAD@@@BFDDDDEBADI@@DCC@@AA@@AB@BA@BBAB@@@BCCA@CBBBA@@@CDB@@@C@@D@@AD@@@B@BEBAA@@AC@BAAAA@C@@A@AAAAA@@EAEAA@C@CB@DC@@AA@A@A@@@ABBBCBAAC@BDEB@CGBED@B@@BBGB@BA@@@@A@AC@ABA@C@AAACCAACCCAAEC@@D@AAC@CBCBAD@B@BABAFAFADA@@BA@ABABCBCABA@@EECMAGFACE@ACCA@E@EAA@CAC@C@G@@@AA@@B@AI@GBAA@@A@@AA@@B@@CAG@A@@@CA@ABAA@@@@B@BA@@B@@@@@@@@@@@B@@BB@B@@C@ABA@AAB@C@A@ACAA@BC@AB@B@@AB@@AD@@A@AA@A@@C@CC@@A@@@A@@@A@@@@@A@@@@@A@@@ABA@@@A@A@ABA@@@A@@@A@@@@@A@ABA@@@A@@@A@ABA@E@ABA@C@@BA@A@@@CA@A@@@@CF@@ADABAA@AA@A@@@ABA@@@A@AA@CABCJBBAICBCBADCBEEA@AA@@ABAFB@ADE@CIABCFB@A@AA@BCEC@@A@@A@CA@@DAA@ACAAABC@A@AEBA@BB@BC@@BA@@BE@E@AAA@BAC@C@C@@BAFGA@CCACA@@@EBAB@B@CIACACC@@BAAA@AFCB@@ABC@CA@B@@@DC@@A@@AA@AE@AABCGGA@A@SAA@]@C@"],
                "encodeOffsets": [[123894, 31881]]
            }
        }], "UTF8Encoding": true
    });
}));