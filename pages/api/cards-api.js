// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ data: [[
        {
          title: "B2D",
          imageSRC: "/assets/b2d/binary-to-decimal.png",
          altName: "Binary Converter",
          text: "Binary is the number system all digital computers are based on." +
              "Therefore it is important for developers to understand binary, or base 2, mathematics." +
              "The purpose of Bin2Dec is to provide practice and understanding." +
              "of how binary calculations.",
          pageLink: "/challenge/beginner/binary-2-decimal",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md"
        },
        {
          title: "Calculator",
          imageSRC: "/assets/calculator/calculator.jfif",
          altName: "Calculator",
          text: "                                Calculators are not only one of the most useful tools available, but" +
              "                                they are also a great way to understand UI and event processing in an" +
              "                                application. In this problem you will create\n\n" +
              "                                a calculator that supports basic arithmetic calculations on integers." +
              "                                The styling is up to you so use your imagination and get creative! You" +
              "                                might also find it worth your time to experiment with the calculator app on your" +
              "                                mobile device to better understand basic functionality and edge cases.",
          pageLink: "/challenge/beginner/calculator-page",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md"
        },
      ], [
        {
          title: "Border Radius",
          imageSRC: "/assets/border-radius/border-radius.jfif",
          altName: "Border Radius Tester",
          text: "                                The border-radius property can have multiple values changed." +
              "                                Preview how the shape looks while changing these values.",
          pageLink: "/challenge/beginner/border-radius-page",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md"
        },
        {
          title: "Calender",
          imageSRC: "/assets/calender/calender.jfif",
          altName: "Calender",
          text: "                                Build a calendar application to organize you daily life." +
              "                                Add functionality to add events and reminder." +
              "                                Style your own calendar according to your requirement",
          pageLink: "/challenge/beginner/calender-page",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md"
        },
      ], [
        {
          title: "CSV To JSON",
          imageSRC: "/assets/csv-to-json/csv-to-json.png",
          altName: "CSV Converter To Json",
          text: "                                In the JSON2CSV application you translated JSON to a comma separated value (CSV) format." +
              "                                The objective of CSV2JSON is to reverse that process by converting a block of CSV text to JSON.\n\n" +
              "                                In CSV2JSON you will start by copying the JSON2CSV app you created and then modify it to allow" +
              "                                CSV to JSON conversion as well the JSON to CSV conversion that is already present. " +
              "                                In additional" +
              "                                to providing a useful function, this challenge will also give you practice in modifying existing" +
              "                                applications to add new functionality.",
          pageLink: "/challenge/beginner/csv-2-json-page",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/CSV2JSON-App.md"
        },
        {
          title: "Cause Effect",
          imageSRC: "/assets/cause-effect/list.jfif",
          altName: "List Image",
          text: "                                Patterns are integral to software engineering and represent potentially reusable" +
              "                                components in program logic. However, patterns are not used only for program logic," +
              "                                they are exist in other domains such as DevOps, user support, and the user interface." +
              "                                A common user interface pattern is to summarize data in one section of a page\n\n" +
              "                                that consists of some type of list (like text, images, or icons) that describes" +
              "                                or categorizes a set of data. When a list item is clicked, the detailed data behind" +
              "                                it is displayed in an adjacent pane on the page.\n\n" +
              "                                For example, on a real estate site clicking an address in a list of" +
              "                                properties for sale displays the details about the property in another" +
              "                                part of the page.",
          pageLink: "/challenge/beginner/cause-effect-page",
          readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md"
        },
      ]], time: Date.now()});

}
