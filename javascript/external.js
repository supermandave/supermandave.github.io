var webmaps =
  [
    ["Oil Spill Toolkit",
    "https://www.glo.texas.gov/ost/",
    "The Oil Spill Toolkit developed by Enterprise Technology Solutions of The Texas General Land Office is a decision-support resource.  This is where I would write my second sentence about the Oil Spill Toolkit.  This is where I would write my third sentence about the Oil Spill Toolkit."
    ],
    ["Texas Ecosystems Analytical Mapper",
    "http://tpwd.texas.gov/gis/team/",
    "The Texas Parks and Wildlife's Landscape Ecology program developed this application to deliver the Ecological Mapping Systems of Texas (EMS) data to Texas citizens.  This is where I would write my second sentence about the Oil Spill Toolkit.  This is where I would write my third sentence about the Texas Ecosystems Analytical Mapper (TEAM)."
    ]
  ];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);

  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>";

  return message;
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      if (column < 2)
      {
        document.write("<td>" + webmaps[row][column] + "</td>");
      } else {
        document.write("</tr><tr><td colspan='2'>" + webmaps[row][column] + "<p></td></tr><tr>");
      }
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
