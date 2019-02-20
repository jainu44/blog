const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    QUESTION: Symbol("question"),
    YES: Symbol("yes"),
    property: Symbol("property"),
    apartment: Symbol("apartment"),
    house: Symbol("house"),
    apartmentdetails1: Symbol("apartmentdetails1"),
    apartmentdetails2: Symbol("apartmentdetails1"),
    housedetails1: Symbol("house"),
    housedetails2: Symbol("house"), 
     Congratulation: Symbol("Congratulation")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Welcome to Housing Rentals.Would to like to rent the house?? 'Yes' or 'No'?";
                this.stateCur = GameState.QUESTION;
                break;
            case GameState.QUESTION:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "In which location would to prefer.Press 1.Kitchener ★Type 'Done' for a Exit.★";
                        this.stateCur = GameState.YES;}
                else if(sInput.toLowerCase().match("done")){
                    sReply = "Thank you for visiting our site. Type 'Yes'."; 
                        this.stateCur = GameState.WELCOMING;}
                else{
                    sReply ="Thank You for visiting our site, To visit again. Type 'Yes' For starting a New Application. ";
                    this.stateCur = GameState.WELCOMING;
                }
                break;

            case GameState.YES:
                if(sInput.toLowerCase().match("1")){
                    sReply = "Welcome to Kitchener city. What kind of property would you prefer? 1. Apartment 2.House.★Type 'Done' for a Exit.★ ";
                    this.stateCur = GameState.property;}
                else if(sInput.toLowerCase().match("done")){
                    sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application."; 
                    this.stateCur = GameState.WELCOMING;}
                else{
                    sReply = "Invalid option.....,Type 'Yes' to start again.";
                    this.stateCur = GameState.QUESTION;
                }
                break;

            case GameState.property:
                if(sInput.toLowerCase().match("1")){
                    sReply = "Welcome to apartment section. Press 1 (1 BHK). 2(2 BHK). ★Type 'Done' for a Exit.★";
                    this.stateCur = GameState.apartment;}
                else if(sInput.toLowerCase().match("2")){
                    sReply = "Welcome to House section. Press 1 (1 BHK). 2(2 BHK). ★Type 'Done' for a Exit.★";
                    this.stateCur = GameState.house;}
                    else if(sInput.toLowerCase().match("done")){
                        sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application.."; 
                            this.stateCur = GameState.WELCOMING;}
                else{
                    sReply = "Invalid option.....,Type 'Yes' to start again.";
                    this.stateCur = GameState.QUESTION;
                }
                break;

            case GameState.apartment:
            if(sInput.toLowerCase().match("1")){
                sReply = " There are three (1 BHK) apartments are available in your city. Press 1, Located at (221 Spruce St, kitchener, ON N2Y 5K7, Canada). Press 2, Located at (294 chandler St, kitchener, ON N4K 9U8, Canada). Press 3, Located at (286 Old villa Rd, kitchener, ON N6J 4P7, Canada).★Type 'Done' for a Exit.★";
                this.stateCur = GameState.apartmentdetails1;}
                else if(sInput.toLowerCase().match("2")){
                    sReply = " There are there (2 BHK) apartments are available in your city. Press 1,Located at (447 Nensi Vally, kitchener, ON N8P 2Y9, Canada). 2, Located at (895 Maltin St, kitchener, ON N69 4O8, Canada). 3, Located at (28 Lindan Dr, kitchener, ON N9J 4P4, Canada).★Type 'Done' for a Exit.★";
                        this.stateCur = GameState.apartmentdetails2;}
                else if(sInput.toLowerCase().match("done")){
                    sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application.."; 
                        this.stateCur = GameState.WELCOMING;}   
                else{
                    sReply = "Invalid option.....,Type 'Yes' to start again.";
                    this.stateCur = GameState.QUESTION;
                }
                break;

            case GameState.house:
                if(sInput.toLowerCase().match("1")){
                    sReply = " There are Two (1 BHK) Houses are available in your city. Press 1, Located at (44 Greeenflied Av, kitchener, ON N5V 5K7, Canada). 2, Located at (47 Albart St, kitchener, ON N4K 9UP Canada).★Type 'Done' for a Exit.★ ";
                    this.stateCur = GameState.housedetails1;}
                else if(sInput.toLowerCase().match("2")){
                        sReply = " There are Three (2 BHK) Houses are available in your city. Press 1, Located at (98 Sanview, kitchener, ON N9P 5K7, Canada). 2, Located at (29 chandler Road, kitchener, ON N4K 9E8, Canada). 3, Located at (286 New villa Rd, kitchener, ON N2J 1P7, Canada). ★Type 'Done' for a Exit.★";
                        this.stateCur = GameState.housedetails2;}
                else if(sInput.toLowerCase().match("done")){
                            sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application."; 
                                this.stateCur = GameState.WELCOMING;}   
                else{
                    sReply = "Invalid option.....,Type 'Yes' to start again.";
                    this.stateCur = GameState.QUESTION;
                }
                break;
            
            case GameState.apartmentdetails1:
                if(sInput.toLowerCase().match("1")){
                    sReply = "One bedroom and One bathroom Floor 20! Granite counter-tops, stainless steel appliances, en-suite laundry and well Furnished.★Type 'Done' for a Exit.★";
                    this.stateCur = GameState.Congratulation;}
                    else if(sInput.toLowerCase().match("2")){
                            sReply = "★ Furnished: Double Bed + Desk + Chair + Armchai ★ Includes Gas + Water + Internet ★ Extra Hydro  ★ Free Laundry and 50' flat screen TVs.★Type 'Done' for a Exit.★";
                            this.stateCur = GameState.Congratulation;}
                    else if(sInput.toLowerCase().match("3")){
                        sReply = " 1 bedroom apartment. - All inclusive - landlord pays the heat, hydro, and water!.★Type 'Done' for a Exit.★";
                            this.stateCur = GameState.Congratulation;}
                            else if(sInput.toLowerCase().match("done")){
                                sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application.."; 
                                    this.stateCur = GameState.WELCOMING;}   
                    else{
                        sReply = "Invalid option.....,Type 'Yes' to start again.";
                        this.stateCur = GameState.QUESTION;
                    }
            case GameState.apartmentdetails2:
                    if(sInput.toLowerCase().match("1")){
                        sReply = "Freshly painted. Few minutes drive to both Universities and new Conestoga College in Kitchener. Walking distance to Schools, Grocery Stores and Bus Route. Laundry is on the main floor. All appliances are included.★Type 'Done' for a Exit.★";
                        this.stateCur = GameState.Congratulation;}
                        else if(sInput.toLowerCase().match("2")){
                            sReply = "1 bedrooms,1.5 bathrooms,mainfloor hardwood,gas fireplace ,all appliances incl washer and dryer, south facing, parking for 4 vehicles and large back yard.★Type 'Done' for a Exit.★";
                                this.stateCur = GameState.Congratulation;}
                        else if(sInput.toLowerCase().match("3")){
                            sReply = " Newly renovated 1 bedroom Apartment in Downtown Kitchener steps to LRT, VIA and GO transit, Kitchener Market and highway.★Type 'Done' for a Exit.★ ";
                                this.stateCur = GameState.Congratulation;}   
                        else if(sInput.toLowerCase().match("done")){
                            sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application."; 
                                this.stateCur = GameState.WELCOMING;}
                        else{
                            sReply = "Invalid option.....!,Type 'Yes' to start again.";
                            this.stateCur = GameState.QUESTION;
                        }
                        case GameState.housedetails1:
                        if(sInput.toLowerCase().match("1")){
                            sReply = "One bedroom and One bathroom with Living room, family room plus office room on the main level. Second level laundry.★Type 'Done' for a Exit.★";
                            this.stateCur = GameState.Congratulation;}
                            else if(sInput.toLowerCase().match("2")){
                                    sReply = "One year old luxury family House ★ Includes Gas + Water + Internet ★ Extra Hydro  ★ Free Laundry and 50' flat screen TVs. ★Type 'Done' for a Exit.★";
                                    this.stateCur = GameState.Congratulation;} 
                            else if(sInput.toLowerCase().match("done")){
                                    sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application."; 
                                        this.stateCur = GameState.WELCOMING;}
                            else{
                                sReply = "Invalid option.....,Type 'Yes' to start again.";
                                this.stateCur = GameState.QUESTION;
                            }
                    case GameState.housedetails2:
                        if(sInput.toLowerCase().match("1")){
                                sReply = "One bedroom and One bathroom Floor 20! Granite counter-tops, stainless steel appliances, en-suite laundry and well Furnished.★Type 'Done' for a Exit.★";
                                this.stateCur = GameState.Congratulation;}
                            else if(sInput.toLowerCase().match("2")){
                                sReply = "★ Furnished: Double Bed + Desk + Chair + Armchai ★ Includes Gas + Water + Internet ★ Extra Hydro  ★ Free Laundry and 50' flat screen TVs.★Type 'Done' for a Exit.★";
                                        this.stateCur = GameState.Congratulation;}
                            else if(sInput.toLowerCase().match("3")){
                                sReply = " 1 bedroom House. - All inclusive - landlord pays the heat, hydro, and water!.★Type 'Done' for a Exit.★";
                                        this.stateCur = GameState.Congratulation;}
                            else if(sInput.toLowerCase().match("done")){
                                sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application.."; 
                                                this.stateCur = GameState.WELCOMING;}   
                                else{
                                    sReply = "Invalid option.....,Type 'Yes' to start again.";
                                    this.stateCur = GameState.QUESTION;
                                }

             case GameState.Congratulation:
                if(sInput.toLowerCase().match("done")){
                    sReply = "Thank you for visiting our site. Type 'Yes' For starting a New Application. "; 
                     this.stateCur = GameState.WELCOMING;}
                
        }
        return([sReply]);
    }
}