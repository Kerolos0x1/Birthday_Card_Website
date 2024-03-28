getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Nata";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML =
         "<div class='center-letter animate-reveal animate-first'> <h1>Happy Birthday!</h1><br><p style='margin: 0 10px; line-height:160%;'>Happy birthday! Congratulations on your achievements and keep striving for success. Dream big, embrace challenges, believe in yourself, and surround yourself with positivity. I am here for you. May this year be filled with incredible opportunities and memorable moments. Best wishes! <br> Happy Birthday ya Ra7oomaa!</p></div><div class='animate-reveal animate-second' style='margin-top: 15px;'> <a href='placeholderlink' style='margin-top: 15px; font-family: Arial; background-color: #f79420; -webkit-border-radius: 4px; border-radius: 4px; color: #ffffff; display: block; margin: 0 auto; font-size: 22px; font-weight: 700; line-height: 36px; text-align: center; text-decoration: none; width: 280px; -webkit-text-size-adjust: none;' target='_blank'>Start Fundraising</a></div>"
    }
}