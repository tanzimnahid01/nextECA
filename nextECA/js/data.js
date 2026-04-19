// ============================================
// nextECA — Data Store
// Edit this file to add/update opportunities
// ============================================

const ECA_DATA = {

  opportunities: [
    {
      id: 1,
      title: "NASA Space Apps Challenge 2025",
      type: "hackathon",
      country: "🇺🇸 USA (Global)",
      description: "The world's largest global hackathon. Solve real NASA challenges using open data. Compete locally, win globally.",
      deadline: "2025-10-05",
      link: "https://www.spaceappschallenge.org",
      urgent: false
    },
    {
      id: 2,
      title: "International Mathematical Olympiad",
      type: "olympiad",
      country: "🌍 International",
      description: "The most prestigious mathematics competition for high school students worldwide. Represents excellence in problem solving.",
      deadline: "2025-03-31",
      link: "https://www.imo-official.org",
      urgent: true
    },
    {
      id: 3,
      title: "Google Solution Challenge",
      type: "hackathon",
      country: "🌐 Global",
      description: "Build a solution to one of the UN's 17 Sustainable Development Goals using Google products and technologies.",
      deadline: "2025-03-28",
      link: "https://developers.google.com/community/gdsc-solution-challenge",
      urgent: true
    },
    {
      id: 4,
      title: "Microsoft Imagine Cup 2025",
      type: "competition",
      country: "🌐 Global",
      description: "Microsoft's global student technology competition. Transform your idea into a tech solution with AI, Azure, and more.",
      deadline: "2025-04-15",
      link: "https://imaginecup.microsoft.com",
      urgent: false
    },
    {
      id: 5,
      title: "International Physics Olympiad",
      type: "olympiad",
      country: "🇸🇦 Saudi Arabia",
      description: "IPhO 2025 hosted in Riyadh. World-level theoretical and experimental physics competition for high school students.",
      deadline: "2025-02-28",
      link: "https://www.ipho2025.sa",
      urgent: true
    },
    {
      id: 6,
      title: "Chevening Scholarship 2025-26",
      type: "scholarship",
      country: "🇬🇧 UK",
      description: "UK Government's global scholarship programme. Study a 1-year master's degree at any UK university.",
      deadline: "2025-11-05",
      link: "https://www.chevening.org",
      urgent: false
    },
    {
      id: 7,
      title: "ICPC Asia Dhaka Regional",
      type: "hackathon",
      country: "🇧🇩 Bangladesh",
      description: "International Collegiate Programming Contest – Asia Dhaka Regional. Team-based competitive programming.",
      deadline: "2025-09-20",
      link: "https://icpc.global",
      urgent: false
    },
    {
      id: 8,
      title: "Alibaba Global Math Competition",
      type: "olympiad",
      country: "🌐 Global",
      description: "Open to all math lovers around the world. No degree or age restrictions. Prizes up to $30,000.",
      deadline: "2025-04-01",
      link: "https://damo.alibaba.com/alibaba-global-mathematics-competition",
      urgent: false
    },
    {
      id: 9,
      title: "Aga Khan Foundation Scholarship",
      type: "scholarship",
      country: "🌍 Multiple Countries",
      description: "Scholarships for postgraduate studies to outstanding students from developing countries who have no other means of support.",
      deadline: "2025-05-31",
      link: "https://www.akdn.org/our-agencies/aga-khan-foundation/scholarships",
      urgent: false
    },
    {
      id: 10,
      title: "MIT Entrepreneurship Competition",
      type: "competition",
      country: "🇺🇸 USA",
      description: "MIT $100K Entrepreneurship Competition — the world's premier student startup competition with $100,000+ in prizes.",
      deadline: "2025-12-01",
      link: "https://mit100k.org",
      urgent: false
    },
    {
      id: 11,
      title: "International Biology Olympiad",
      type: "olympiad",
      country: "🇮🇳 India",
      description: "IBO 2025 in Pune, India. Top biology students from 90+ countries compete in theory and practical examinations.",
      deadline: "2025-03-15",
      link: "https://www.ibo2025.in",
      urgent: true
    },
    {
      id: 12,
      title: "Fulbright Foreign Student Program",
      type: "scholarship",
      country: "🇺🇸 USA",
      description: "U.S. Government scholarship for graduate students, young professionals and artists from abroad to study in the USA.",
      deadline: "2025-06-30",
      link: "https://foreign.fulbrightonline.org",
      urgent: false
    }
  ],

  deadlines: [
    { title: "Google Solution Challenge", date: "Mar 28, 2025" },
    { title: "IPhO Nominations", date: "Feb 28, 2025" },
    { title: "IMO Registration", date: "Mar 31, 2025" },
    { title: "Alibaba Math Competition", date: "Apr 01, 2025" },
    { title: "Microsoft Imagine Cup", date: "Apr 15, 2025" },
    { title: "IBO 2025 Registration", date: "Mar 15, 2025" },
    { title: "NASA Space Apps", date: "Oct 05, 2025" },
    { title: "Chevening Scholarship", date: "Nov 05, 2025" },
  ],

  countries: [
    { flag: "🇧🇩", name: "Bangladesh", count: "18 opportunities" },
    { flag: "🇺🇸", name: "United States", count: "34 opportunities" },
    { flag: "🇬🇧", name: "United Kingdom", count: "22 opportunities" },
    { flag: "🇨🇦", name: "Canada", count: "15 opportunities" },
    { flag: "🇩🇪", name: "Germany", count: "12 opportunities" },
    { flag: "🇯🇵", name: "Japan", count: "11 opportunities" },
    { flag: "🇦🇺", name: "Australia", count: "10 opportunities" },
    { flag: "🇸🇬", name: "Singapore", count: "9 opportunities" },
    { flag: "🇰🇷", name: "South Korea", count: "8 opportunities" },
    { flag: "🇳🇱", name: "Netherlands", count: "7 opportunities" },
    { flag: "🇸🇪", name: "Sweden", count: "6 opportunities" },
    { flag: "🇫🇷", name: "France", count: "9 opportunities" },
  ],

  universities: [
    {
      rank: "01",
      name: "Massachusetts Institute of Technology",
      country: "🇺🇸 USA",
      tags: ["Hackathons", "Research", "Entrepreneurship", "Olympiads"]
    },
    {
      rank: "02",
      name: "Stanford University",
      country: "🇺🇸 USA",
      tags: ["Startups", "Case Competitions", "Fellowships", "Sports"]
    },
    {
      rank: "03",
      name: "University of Cambridge",
      country: "🇬🇧 UK",
      tags: ["Debating", "Clubs", "Research", "Music"]
    },
    {
      rank: "04",
      name: "National University of Singapore",
      country: "🇸🇬 Singapore",
      tags: ["Hackathons", "Sports", "Arts", "Community Service"]
    },
    {
      rank: "05",
      name: "ETH Zurich",
      country: "🇨🇭 Switzerland",
      tags: ["Robotics", "Research", "Science Olympiad", "Innovation"]
    },
    {
      rank: "06",
      name: "BUET",
      country: "🇧🇩 Bangladesh",
      tags: ["ICPC", "Robotics", "Science Olympiad", "Debate"]
    }
  ],

  updates: [
    {
      tag: "New Opportunity",
      date: "Jan 15, 2025",
      title: "NASA Space Apps 2025 Registration Now Open",
      text: "NASA has officially opened registrations for Space Apps Challenge 2025. Over 30,000 participants expected from 160+ countries.",
      link: "#"
    },
    {
      tag: "Deadline Alert",
      date: "Jan 12, 2025",
      title: "IMO 2025 National Selection Round Deadlines",
      text: "Many countries are closing nominations for IMO 2025. Bangladesh deadline is March 31. Check your national coordinator.",
      link: "#"
    },
    {
      tag: "Platform Update",
      date: "Jan 10, 2025",
      title: "nextECA Now Lists 120+ Active Opportunities",
      text: "Thanks to community contributions, we've crossed 120 listed ECA opportunities. Submit your own via our GitHub repository.",
      link: "https://github.com/nextECA"
    },
    {
      tag: "International",
      date: "Jan 8, 2025",
      title: "World Bank Group Joins as nextECA Supporter",
      text: "We're honored to announce World Bank Group as an official supporter of the nextECA open-source initiative.",
      link: "#"
    },
    {
      tag: "Community",
      date: "Jan 5, 2025",
      title: "Open Source Contributors Wanted",
      text: "We are looking for developers, writers, and designers to help expand nextECA. All contributions welcome on GitHub.",
      link: "pages/contribute.html"
    },
    {
      tag: "New Feature",
      date: "Jan 2, 2025",
      title: "Deadline Reminder System Launched",
      text: "Subscribe to deadline reminders for categories you care about. Never miss an application window again.",
      link: "#"
    }
  ]
};
