const Movies = [
    {
        id: 1,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQucTrO8RrOImb2j2Vnn7oYgik35qezxBs5Dpwb-KHwBee3CmPv",
        title: 'Sher Shivraj',
        rating: 5,
        description: "Sher Shivraj is a 2022 Indian Marathi-language historical action drama film directed by Digpal Lanjekar and produced by Chinmay Mandlekar, Digpal Lanjekar, Nitin Keni, Pradyot Pendharkar and Anil Warkhade.[2] The film based on the life of Maratha king, Shivaji I where he defeated Afzal Khan with brilliant tactics and courage stars Chinmay Mandlekar in title role, Mrinal Kulkarni, Ajay Purkar, Mukesh Rishi along with Bipin Surve and Rohan Mankani in supporting roles.[3][4] The film was released theatrically on 22 April 2022.",
    }, 
    {
        id: 2,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSAoOrkay0rrO1pEbLAHeIYPSZy_w8oGc6J_Ca0p7z4HSFl7ik",
        title: "Surya The Soldier",
        rating: 4,
        description: "Surya is a soldier in the Indian Army who suffers from anger management issues and dreams of being posted at the LOC. After getting into a brawl at a local club and attacking Inspector Himanshu Negi and stealing the latter's gun, Surya uses it to shoot dead a terrorist right when the officer comes to ask for the gun from Surya's senior Lt Gen Sanjay Shrivastav "
    },
    {
        id: 3,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlSBuq_DsWCAU2oYqACUPwlWBFvWG2UC-yew&s',
        title: "Golmaal Again",
        description: "Golmaal Again (transl. Chaos Again) is a 2017 Indian Hindi-language supernatural action comedy film written and directed by Rohit Shetty; produced by Rohit Shetty Pictures, Mangl Murti Films and Reliance Entertainment.[1] The film is the fourth installment of Golmaal franchise and stars Ajay Devgn, Tabu, Arshad Warsi, Parineeti Chopra, Tusshar Kapoor, Shreyas Talpade, Kunal Khemu, Neil Nitin Mukesh and Johnny Lever.",
        rating: 3,
    },
    {
        id: 4,
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1RDvEfNdxAbbr2aPgjUW1txRGjKs5gBbCSRUgZcmiQqnwsM9a",
        title: "Uri: The Surgical Strike",
        rating: 3,
        description: "Uri: The Surgical Strike is a 2019 Indian Hindi-language war action film written and directed by debutant Aditya Dhar and produced by Ronnie Screwvala under the RSVP Movies banner.[5] A fictionally dramatised account of the true event of the retaliation to the 2016 Uri attack, the film stars Vicky Kaushal along with Yami Gautam, Paresh Rawal, Kirti Kulhari and Mohit Raina in pivotal roles, and tells the story of Major Vihaan Shergill (Vicky Kaushal) of the Para (Special Forces), who played a leading role in the events."
    }, 
    {
        id: 5,
        image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRuWWDMeE1iElPRz-2r6jMLvYaOgHTrNWxHIC_7S9QmoZdDa8kO",
        title: "Chhaava",
        rating: 5,
        description: "Chhaava (transl. Lion cub) is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj, the second ruler of the Maratha Empire, who is played by Vicky Kaushal. An adaptation of the Marathi novel Chhava by Shivaji Sawant, it is directed by Laxman Utekar and produced by Dinesh Vijan under Maddock Films. The cast also includes Rashmika Mandanna and Akshaye Khanna."
    },
   
    {
        id: 6,
        image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR_2TWA9WZYrHcmi1s0pEYdVUzlySSWDTE-fkS4O8OXuoC5pwkx",
        title: "Amaran",
        rating: 5,
        description: "Amaran (transl. The Immortal) is a 2024 Indian Tamil-language biographical action war film written and directed by Rajkumar Periasamy and produced by Raaj Kamal Films International, together with Sony Pictures Films India. The film stars Sivakarthikeyan as Major Mukund Varadarajan, alongside Sai Pallavi, Rahul Bose and Bhuvan Arora. "
    },
    {
        id: 7,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-ebpM2eCE5zokXPmVoXiqleuTSZzu_xueZygyefw5anVly2u7",
        title: "Lucky Baskhar",
        rating: 4,
        description: "Lucky Baskhar (stylised as LUCKY BASKHA₹) is a 2024 Indian Telugu-language period crime drama film written and directed by Venky Atluri. It is produced by S. Naga Vamsi and Sai Soujanya under Sithara Entertainments, Fortune Four Cinema and Srikara Studios. The film stars Dulquer Salmaan in the titular role, alongside Meenakshi Chaudhary, Tinnu Anand, P. Sai Kumar, Ramki, Raghu Babu, Sarvadaman D. Banerjee, Sachin Khedekar and Y. Kasi Viswanath. In the film, a lower-middle-class man begins engaging in financial scams after struggling to support his family while battling debt and humiliation.."
    }, 
    {
        id: 8,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSK2uaY7SfSe_Rpev3W-c6FUNl4X4e_d8maX_uz5Sul7LLVbCza",
        title: "Zapatlela",
        rating: 5,
        description: "Zapatlela (transl. Possessed) is a 1993 Indian Marathi-language horror comedy film directed and produced by Mahesh Kothare under Jenma Films International. The film stars an ensemble cast of Mahesh Kothare, Laxmikant Berde, Pooja Pawar, Kishori Ambiye, Madhu Kambikar, Jairam Kulkarni, Vijay Chavan, Ravindra Berde, Raghavendra Kadkol, Bipin Varti, and Dilip Prabhavalkar made a cameo appearance and provided the voiceover for the puppet Tatya Vinchu in the film. The practical effects for the puppet were created by Ramdas Padhye, a renowned ventriloquist and puppeteer."
    }, 

]
export default Movies;