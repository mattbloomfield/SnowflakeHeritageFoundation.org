export interface TourStop {
  slug: string;
  name: string;
  address?: string;
  yearBuilt?: string;
  style?: string;
  description: string[];
  imagePath: string;
  imageAlt: string;
  audioPath: string;
  audioLabel: string;
  hasImage?: boolean;
  hasAudio?: boolean;
}

export interface Tour {
  slug: string;
  name: string;
  city: string;
  summary: string;
  duration: string;
  startingPoint: string;
  stops: TourStop[];
}

export const snowflakeTour: Tour = {
  slug: 'snowflake',
  name: 'Snowflake Heritage Tour',
  city: 'Snowflake',
  summary:
    'Walk through 13 historically significant sites in downtown Snowflake, from the oldest home in town to Victorian-era landmarks listed on the National Register of Historic Places.',
  duration: '1\u00BD to 2 hours',
  startingPoint: 'Stinson Museum, 102 N. 1st East',
  stops: [
    {
      slug: 'stinson-museum',
      name: 'Stinson Museum',
      address: '102 N. 1st East, Snowflake, AZ',
      yearBuilt: 'c. 1873',
      style: 'Hispanic Colonial Adobe',
      description: [
        'The Stinson Museum is housed in the oldest permanent structures in Snowflake, consisting of two adobe buildings that date from approximately 1873. These Hispanic Colonial Adobe structures were originally erected by James Stinson, a cattleman who settled the Silver Creek valley around 1870. Stinson used the land to raise food, cattle, and horses for sale to the quartermasters at Fort Defiance and Fort Apache.',
        'In July 1878, William Jordan Flake and a group of Mormon families entered the valley and purchased the ranch from Stinson for $12,000. The two adobe structures were joined together into one continuous structure \u2014 the building visitors see today. The Stinson Ranch House served multiple civic purposes in the early settlement: it hosted church meetings, school sessions, and court proceedings.',
        'A couple of months after the Flakes\u2019 arrival, LDS Apostle Erastus Snow visited the valley on September 24, 1878, and the settlement was named \u201CSnowflake\u201D in honor of both Snow and Flake. Today, the museum displays artifacts from Snowflake\u2019s three foundational eras: its prehistoric past, its Hispanic heritage, and its Mormon Pioneer settlement. Highlights include the loom used by Lucy Hannah Flake to weave cloth and rag rugs.',
      ],
      imagePath: '/images/tours/snowflake/stinson-museum.jpg',
      imageAlt: 'Stinson Museum, the oldest home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/stinson-museum.mp3',
      audioLabel: 'Narrated history of the Stinson Museum',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'jm-flake-home',
      name: 'J.M. Flake Home',
      yearBuilt: '1895\u20131896',
      style: 'Victorian Second Empire',
      description: [
        'The James Madison Flake Home, known as \u201CThe Big House,\u201D was built in 1895\u20131896 on Stinson and Hunt Streets. James Madison Flake was the eldest son of William Jordan Flake, the co-founder of Snowflake. After serving a mission for the LDS Church in England, James returned inspired by the grand architecture he had seen abroad.',
        'He hired English carpenter Ralph Ramsay and George A. Gardner to construct a three-story, approximately 6,000-square-foot home in the Victorian Second Empire style, built from locally made and fired bricks. The home contained 16 rooms. Ramsay, who notably also carved the Eagle Gate in Salt Lake City, adorned the third-story gable with a carved life-sized horse\u2019s head and a large horseshoe.',
        'James Madison Flake had nine children with his first wife and fifteen with his second, filling the home\u2019s many rooms. The home is brimming with hundreds of objects, books, and Flake family memorabilia. It was listed on the National Register of Historic Places on July 14, 1971, making it one of the earliest Snowflake properties to receive that distinction.',
      ],
      imagePath: '/images/tours/snowflake/jm-flake-home.jpg',
      imageAlt: 'J.M. Flake Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/jm-flake-home.mp3',
      audioLabel: 'Narrated history of the J.M. Flake Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'osmer-d-flake',
      name: 'Osmer D. Flake Home',
      yearBuilt: '1891\u20131893',
      style: 'Local Burnt Brick',
      description: [
        'The Osmer D. Flake Home was constructed beginning in 1891 and the family moved in by 1893. Osmer Dennis Flake, born March 6, 1868, in Beaver, Utah, was the sixth child of William Jordan Flake and Lucy Hannah White. After marrying Elsie Owens in 1891, Osmer built this home of local burnt brick and lime mortar at the corner of Main Street and 2nd Street.',
        'The original structure contained two large rooms on each floor. In 1900, Osmer hired Allen Frost to add a large kitchen, laundry room, pantry, dining room, and bedroom onto the east side of the house. The property passed through several family members over the decades.',
        'In 2000, Dean and Sandra Porter purchased the property and transformed it into the Heritage Inn Bed and Breakfast, restoring the pioneer-era decor and antiques while modernizing amenities. The Heritage Inn continues to operate today, offering guests a glimpse into Snowflake\u2019s Victorian-era heritage. The home is a contributing property within the Snowflake Townsite Historic District.',
      ],
      imagePath: '/images/tours/snowflake/osmer-d-flake.jpg',
      imageAlt: 'Osmer D. Flake Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/osmer-d-flake.mp3',
      audioLabel: 'Narrated history of the Osmer D. Flake Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'cl-flake-home',
      name: 'C.L. Flake Home',
      description: [
        'Charles Love Flake (1862\u20131892) was the second oldest surviving son of William Jordan Flake and Lucy Hannah White. At age 15, Charles traveled from Utah to Arizona as part of the family\u2019s calling to settle the territory. He later attended Brigham Young Academy in Provo and served an LDS mission to Mississippi from 1883 to 1885.',
        'After marrying Christabell Hunt in 1885, Charles became active in civic and business life in Snowflake \u2014 he was elected justice of the peace in 1886, taught school, operated a retail store, and held a contract to carry U.S. mail from Holbrook to Fort Apache. Charles and his brother James formed a business partnership on July 1, 1890.',
        'Tragically, on December 8, 1892, Charles was fatally shot during an attempt to arrest a suspected bank robber from New Mexico. His death was recorded as the first murder in the young town of Snowflake. Charles is honored on the Arizona Peace Officers Memorial at the state capitol in Phoenix.',
      ],
      imagePath: '/images/tours/snowflake/cl-flake-home.jpg',
      imageAlt: 'C.L. Flake Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/cl-flake-home.mp3',
      audioLabel: 'Narrated history of the C.L. Flake Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'tithing-home',
      name: 'Tithing Home',
      description: [
        'In early LDS pioneer settlements, tithing offices and bishop\u2019s storehouses served a critical civic and religious function. Most tithing in the pioneer era was paid \u201Cin kind\u201D rather than in cash \u2014 farmers and families would bring produce, grain, livestock, and other commodities to the local tithing office, where the bishop would receive, store, and redistribute these goods to support community needs.',
        'These buildings typically included a main office along with outbuildings such as granaries, hay barns, potato cellars, and corn cribs. The Relief Society sisters also collected wheat that was stored in separate granaries on the tithing grounds. Tithing orders could be drawn on tithing offices across the region, creating an interconnected network of community resources throughout the LDS settlements of Arizona and Utah.',
      ],
      imagePath: '/images/tours/snowflake/tithing-home.jpg',
      imageAlt: 'Tithing Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/tithing-home.mp3',
      audioLabel: 'Narrated history of the Tithing Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'jesse-n-smith-home',
      name: 'Jesse N. Smith Home',
      address: '203 W. Smith Avenue, Snowflake, AZ',
      yearBuilt: '1906',
      style: 'Colonial Revival',
      description: [
        'The Jesse N. Smith Memorial Home was built in 1906 at 203 W. Smith Avenue. Jesse Nathaniel Smith (1834\u20131906) had the Colonial Revival house built for his fifth wife, Emma Ellen Larson, and her nine children. Tragically, Bishop Smith died the same year the house was completed and never lived in it.',
        'Jesse N. Smith was one of southern Utah and northern Arizona\u2019s most prominent pioneers and a first cousin of Joseph Smith, the founder of the Latter Day Saint movement. He served as the first president of the Eastern Arizona Stake from 1879 to 1887, and as the first president of the Snowflake Stake from 1887 until his death. He was also a farmer, stockman, probate judge, and served in the Arizona Territorial Legislature.',
        'Jesse practiced plural marriage and had five wives and forty-four children. The home\u2019s four upstairs bedrooms feature rare displays dedicated to four of his \u201Csister-wives,\u201D offering visitors an intimate look into the domestic life of a prominent polygamist pioneer family. The home is listed on the National Register of Historic Places.',
      ],
      imagePath: '/images/tours/snowflake/jesse-n-smith-home.jpg',
      imageAlt: 'Jesse N. Smith Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/jesse-n-smith-home.mp3',
      audioLabel: 'Narrated history of the Jesse N. Smith Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'snowflake-academy',
      name: 'Snowflake Academy',
      yearBuilt: '1913',
      description: [
        'The Snowflake Stake Academy was chartered in November 1888 and first opened for classes on January 21, 1889, in an old log cabin. As the school grew, a purpose-built academy was constructed in 1901 with $2,000 raised locally and $1,000 from Church headquarters in Salt Lake City.',
        'On Thanksgiving morning of 1910, a devastating fire destroyed the building. Classes were temporarily held in the upper floor of the Flake Brothers Store until that building was also destroyed by fire 14 months later. The Church pledged to match every dollar raised locally, and the new Academy building was completed and dedicated on November 27, 1913, by Joseph F. Smith, then President of the Church.',
        'The Academy building is listed on the National Register of Historic Places (listed March 25, 1980). After the Church ceased supporting academy schools where state institutions existed, Union High School leased the building starting in 1924 at $1 annually. In recent years, the Town of Snowflake has worked to renovate the historic building into a modern library while retaining its grand historical character.',
      ],
      imagePath: '/images/tours/snowflake/snowflake-academy.jpg',
      imageAlt: 'Snowflake Academy in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/snowflake-academy.mp3',
      audioLabel: 'Narrated history of the Snowflake Academy',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'ericksen-home',
      name: 'Ericksen Home',
      description: [
        'The Ericksen Home is one of the heritage properties on the Snowflake walking tour. The Ericksen family was among the pioneer families who helped establish and build the community of Snowflake in the late nineteenth century.',
      ],
      imagePath: '/images/tours/snowflake/ericksen-home.jpg',
      imageAlt: 'Ericksen Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/ericksen-home.mp3',
      audioLabel: 'Narrated history of the Ericksen Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'locy-rogers-cabin',
      name: 'Locy Rogers Cabin',
      address: '77 W. Center Street, Snowflake, AZ',
      yearBuilt: '1878',
      style: 'Log Cabin',
      description: [
        'In 1878, settler Andrew Locy Rogers built a log cabin in what would become the town of Snowflake. Rogers was born in 1854 in Farmington, Utah, and in 1876 he answered the call of Church President Brigham Young for volunteers to help establish a Latter-day Saint community in northern Arizona.',
        'As the Rogers family grew, the original log cabin was gradually enclosed within a larger structure. The log walls, floor, and ceiling were covered with drywall, and eventually a two-story house was built around the cabin, completely concealing it. By the time Rogers\u2019 great-grandchildren lived in the house, the existence of the original cabin had been entirely forgotten.',
        'Then, in 1989, the house caught fire and burned down. When a demolition crew arrived, they discovered the original 1878 cabin in remarkably good condition \u2014 the drywall covering had actually protected it from the fire damage. The cabin remains on its original site, now surrounded by a city park, and has been outfitted with period-appropriate furnishings.',
      ],
      imagePath: '/images/tours/snowflake/locy-rogers-cabin.jpg',
      imageAlt: 'Locy Rogers Cabin in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/locy-rogers-cabin.mp3',
      audioLabel: 'Narrated history of the Locy Rogers Cabin',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'lds-social-hall',
      name: 'LDS Social Hall',
      description: [
        'Social halls were a hallmark of LDS pioneer settlements, serving as gathering places for dances, theatrical performances, concerts, civic meetings, and community celebrations. These buildings reflected the settlers\u2019 commitment to cultural life and social cohesion alongside their religious and agricultural pursuits.',
        'The Social Hall has served the Snowflake community over many decades, hosting theatrical productions during Pioneer Days celebrations and serving as a venue for community barbecues, concerts, and other cultural events that continue to this day.',
      ],
      imagePath: '/images/tours/snowflake/lds-social-hall.jpg',
      imageAlt: 'LDS Social Hall in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/lds-social-hall.mp3',
      audioLabel: 'Narrated history of the LDS Social Hall',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'main-street-church',
      name: 'Main Street Church',
      description: [
        'The Main Street Chapel is one of the oldest LDS chapels in Snowflake and is listed on the National Historic Registry. The church building sits at the heart of the town\u2019s grid layout, reflecting the centrality of religious life in the community\u2019s founding.',
        'The earliest Snowflake settlers initially held church meetings in the Stinson adobe buildings. As the community grew, purpose-built religious structures were constructed. The Main Street Church, with the Victorian-style homes and lampposts that line the surrounding streets, creates a cohesive historic streetscape that transports visitors back to the pioneer era.',
      ],
      imagePath: '/images/tours/snowflake/main-street-church.jpg',
      imageAlt: 'Main Street Church in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/main-street-church.mp3',
      audioLabel: 'Narrated history of the Main Street Church',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'freeman-home',
      name: 'Freeman Home',
      yearBuilt: '1893',
      style: 'Gothic Revival',
      description: [
        'The John A. Freeman Home was built in 1893 at the northeast corner of Main and Freeman Streets. Known as Snowflake\u2019s \u201CGingerbread House\u201D for its ornate decorative woodwork, it stands as one of the most intact examples of Gothic Revival architecture in Arizona.',
        'The home contains original antiques, toys, and textiles dating from the late 1800s, offering visitors an authentic glimpse into Victorian-era domestic life in a pioneer Arizona community. The Freeman Home was listed on the National Register of Historic Places on November 25, 1980.',
        'The Snowflake-Taylor Chamber of Commerce currently operates out of the John A. Freeman House, giving the historic structure an ongoing civic function alongside its role as a museum home on the heritage walking tour. The building is one of the homes on the tour where visitors can enter and explore the interior.',
      ],
      imagePath: '/images/tours/snowflake/freeman-home.jpg',
      imageAlt: 'Freeman Home in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/freeman-home.mp3',
      audioLabel: 'Narrated history of the Freeman Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'chamber-store',
      name: 'Chamber / Store',
      yearBuilt: '1893',
      description: [
        'The Flake Bros. Store was established in 1888 by brothers James Madison Flake and Charles Love Flake. In July 1892, the brothers commenced construction on a substantial two-story brick building on Main Street. Tragically, during construction, Charles was fatally shot on December 8, 1892, while attempting to arrest a wanted bank robber. James completed the structure in January 1893.',
        'The ground floor housed the mercantile business while a welcoming social hall occupied the upper floor. In January 1912, a fire devastated the building. After the Snowflake Stake Academy burned down in November 1910, Academy classes were temporarily held on the upper floor of the Flake Brothers Store until its own fire struck about 14 months later.',
        'Over the following decades, the historic building housed many businesses. In more recent years, Dean and Sandra Porter lovingly restored the building, reconstructing its iconic two-story appearance. Today, the historic Flake Bros. Store at 123 Main Street operates as Streets On Main, a restaurant serving classic American comfort food.',
      ],
      imagePath: '/images/tours/snowflake/chamber-store.jpg',
      imageAlt: 'Chamber and Store in Snowflake, Arizona',
      audioPath: '/audio/tours/snowflake/chamber-store.mp3',
      audioLabel: 'Narrated history of the Chamber and Store',
      hasImage: true,
      hasAudio: true,
    },
  ],
};

export const taylorTour: Tour = {
  slug: 'taylor',
  name: 'Taylor Heritage Tour',
  city: 'Taylor',
  summary:
    'Explore 15 pioneer-era sites in the sister city of Taylor, from log cabins and sandstone homes to historic churches and schools.',
  duration: '2 to 2\u00BD hours',
  startingPoint: 'Veterans Memorial Park',
  stops: [
    {
      slug: 'veterans-memorial',
      name: 'Veterans Memorial',
      address: '2 N. Main Street, Taylor, AZ',
      description: [
        'The Veterans Memorial is located at 2 North Main Street in Taylor, adjacent to the Taylor Museum. The memorial features the names of Taylor veterans who served in America\u2019s foreign wars, from World War I to the present. It is placed in the center of an attractively landscaped and lighted plaza.',
        'A mural of beloved Taylor sites overlooks the memorial monument from the south wall of the Taylor Museum, painted by local artists depicting iconic landmarks and scenes from the town\u2019s past. The Veterans Memorial serves as the starting point for the Taylor walking tour.',
      ],
      imagePath: '/images/tours/taylor/veterans-memorial.jpg',
      imageAlt: 'Veterans Memorial in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/veterans-memorial.mp3',
      audioLabel: 'Narrated history of the Veterans Memorial',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'brimhall-shumway',
      name: 'Brimhall Shumway Home',
      address: '210 S. Main Street, Taylor, AZ',
      description: [
        'The Brimhall Shumway Home at 210 S. Main Street is listed on the National Register of Historic Places (added in 2004 as the Norman Brimhall House). Norman Andrew Brimhall, born in 1862 in Hyrum, Utah, married Mary Agnes Willis in 1882 in Taylor, Arizona. The Brimhall family was among the early pioneer families who helped build the community along Silver Creek.',
        'The Brimhalls also built the distinctive stone house at 306 S. Main Street around 1890, which was later purchased by Aquilla Standifird in 1905. The Brimhall name is closely tied to Taylor\u2019s built heritage, and the family contributed to multiple structures in the town.',
      ],
      imagePath: '/images/tours/taylor/brimhall-shumway.jpg',
      imageAlt: 'Brimhall Shumway Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/brimhall-shumway.mp3',
      audioLabel: 'Narrated history of the Brimhall Shumway Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'standifird-home',
      name: 'Standifird Home',
      address: '306 S. Main St, Taylor, AZ',
      yearBuilt: 'c. 1890\u20131900',
      style: 'Native Sandstone',
      description: [
        'The Standifird Home at 306 S. Main Street was built circa 1890\u20131900 by the Brimhall family using native sandstone. The house features walls approximately two to three feet thick, two chimneys, and a tin roof. It is listed on the National Register of Historic Places (added in 2004).',
        'In 1905, Aquilla \u201CQuill\u201D Standifird purchased the home. As a teenager, Quill had mixed cement and carried it to the builders during the home\u2019s initial construction. Over his lifetime, he expanded the house significantly, adding a kitchen, south bedrooms, washroom, bathroom, and upstairs stairs with flooring.',
        'In 2004, Aquilla\u2019s son Jack generously donated the home to the Taylor Heritage Foundation. The Standifird Home holds special significance in Taylor\u2019s July 4th traditions: in the early 1950s, Reed Hatch asked Quill to assemble an anvil boom using historic blacksmith anvils. These anvils continue to be fired every July 4th at 4:00 a.m.',
      ],
      imagePath: '/images/tours/taylor/standifird-home.jpg',
      imageAlt: 'Standifird Home, a native sandstone house in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/standifird-home.mp3',
      audioLabel: 'Narrated history of the Standifird Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'hancock-cabin',
      name: 'Hancock Cabin',
      yearBuilt: 'c. 1884\u20131890',
      style: 'Hand-hewn Log Cabin',
      description: [
        'The Hancock Cabin was built circa 1884\u20131890 using hand-hewn squared logs near Silver Creek. It was home to Margaret McCleve Hancock and her husband Mosiah Lyman Hancock. Margaret, born in 1838 in Belfast, Ireland, made the thirteen-hundred-mile journey from Illinois to Utah with the 1856 Mormon Handcart Company.',
        'In 1879, Mosiah and Margaret left Utah to help settle Taylor. Margaret was set apart to minister to the sick and served as a midwife, delivering more than 1,400 babies during her years in Taylor. The couple raised thirteen children in this small cabin.',
        'During the early 1920s, the cabin served as a schoolhouse. In 1925, it was relocated and enclosed within a larger structure, which inadvertently preserved the original logs. Restoration was completed in 2001: all later additions were removed and the cabin was relocated to the southeast corner of Main and Willow Streets. It is now open to visitors as part of the Taylor Museum complex.',
      ],
      imagePath: '/images/tours/taylor/hancock-cabin.jpg',
      imageAlt: 'Hancock Cabin, a hand-hewn log cabin in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/hancock-cabin.mp3',
      audioLabel: 'Narrated history of the Hancock Cabin',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'jordan-palmer-home',
      name: 'Jordan Palmer Home',
      address: '101 S. Main Street, Taylor, AZ',
      description: [
        'The Jordan Palmer Home at 101 S. Main Street is listed on the National Register of Historic Places (added in 2004). The Palmer family was among the prominent pioneer families of the Silver Creek Valley.',
        'The Jordan Palmer House is one of four Taylor properties added to the National Register in 2004, reflecting the town\u2019s concerted effort to preserve its pioneer architectural heritage. It stands along Main Street, Taylor\u2019s central corridor, alongside other historically significant homes from the late nineteenth and early twentieth centuries.',
      ],
      imagePath: '/images/tours/taylor/jordan-palmer-home.jpg',
      imageAlt: 'Jordan Palmer Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/jordan-palmer-home.mp3',
      audioLabel: 'Narrated history of the Jordan Palmer Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'james-henry-lewis',
      name: 'James Henry Lewis Home',
      description: [
        'The James Henry Lewis Home is one of the heritage properties on the Taylor walking tour. The Lewis family was among the pioneer families who settled in the Silver Creek Valley and made lasting contributions to the community.',
        'The Lewis family\u2019s deep ties to Taylor\u2019s community life are reflected in their commitment to heritage preservation. Walt and Ann Hatch Lewis, along with Ella May Willis McCleve, led remodeling efforts at the Pioneer Museum in the 1960s, demonstrating the family\u2019s long-standing dedication to keeping Taylor\u2019s history alive.',
      ],
      imagePath: '/images/tours/taylor/james-henry-lewis.jpg',
      imageAlt: 'James Henry Lewis Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/james-henry-lewis.mp3',
      audioLabel: 'Narrated history of the James Henry Lewis Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'cash-store',
      name: 'Cash Store',
      description: [
        'The Cash Store, also known historically as the Taylor Cash Store, served as a general store in Taylor\u2019s commercial district, providing goods and supplies to the pioneer community along Silver Creek.',
        'The building is an example of how heritage structures in Taylor have been adapted for modern use while retaining their historical integrity. Its original features have been carefully maintained, offering a unique setting that combines the charm of the past with contemporary functionality.',
      ],
      imagePath: '/images/tours/taylor/cash-store.jpg',
      imageAlt: 'Cash Store in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/cash-store.mp3',
      audioLabel: 'Narrated history of the Cash Store',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'az-palmer-home',
      name: 'A.Z. Palmer Home',
      address: '26 E. Center Street, Taylor, AZ',
      description: [
        'The A.Z. Palmer Home at 26 E. Center Street is listed on the National Register of Historic Places (added in 2004). Alma Zena Palmer was one of the original settlers of Snowflake, where he established the first store with his brother-in-law, Mark Kartchner. In 1895, he purchased a store in Taylor and became the pre-eminent merchant in the region.',
        'A.Z. Palmer\u2019s son Arthur later became the postmaster, insurance agent, and farm implement dealer, all businesses operated from the A.Z. Palmer and Son store. The \u201CPalmer and Son\u201D store building was built in 1914. In 1945, Reed and Burt Hatch purchased the store building, renaming it \u201CHatch Bros. General Store.\u201D In 2000, the Town of Taylor purchased and restored it, and in 2005 it opened as the Taylor Museum.',
      ],
      imagePath: '/images/tours/taylor/az-palmer-home.jpg',
      imageAlt: 'A.Z. Palmer Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/az-palmer-home.mp3',
      audioLabel: 'Narrated history of the A.Z. Palmer Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'old-lds-church',
      name: 'Old LDS Church',
      description: [
        'The Old LDS Church in Taylor served as the primary meetinghouse for the Church of Jesus Christ of Latter-day Saints during the town\u2019s early decades. Taylor was settled by Mormon pioneers beginning in 1878, and the community\u2019s religious life centered on this building for many years.',
        'The building served not only as a place of worship but as a community gathering place for meetings, social events, and civic functions, as was typical of LDS meetinghouses in small pioneer settlements. The tradition of Cyrus Jennings walking out of his house and beating the famous Jennings Drum while musicians joined him on the way to \u201Cthe old Church on Center Street\u201D places this building at the heart of Taylor\u2019s social and religious life.',
      ],
      imagePath: '/images/tours/taylor/old-lds-church.jpg',
      imageAlt: 'Old LDS Church in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/old-lds-church.mp3',
      audioLabel: 'Narrated history of the Old LDS Church',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'pioneer-museum',
      name: 'Pioneer Museum',
      address: '14 S. 400 East, Taylor, AZ',
      yearBuilt: '1937',
      description: [
        'The Pioneer Museum was built in 1937 as a meeting place for the local Daughters of the Utah Pioneers. The structure was a community effort with most of the labor donated by local volunteers. It features a flagstone fireplace with stonework laid by Ella May Willis McCleve.',
        'The building was converted into a museum in 1997 through collaboration between a local group and the Taylor/Shumway Heritage Foundation. It opened to the public on July 5, 1997, making it Taylor\u2019s first heritage museum.',
        'The museum displays the celebrated Jennings Drum, constructed by Major Edward P. Duzette in 1840 in Nauvoo, Illinois, and hauled across the plains with Brigham Young in 1847. It also houses a covered wagon that served in the Old West for 65 years and other pioneer-era artifacts.',
      ],
      imagePath: '/images/tours/taylor/pioneer-museum.jpg',
      imageAlt: 'Pioneer Museum in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/pioneer-museum.mp3',
      audioLabel: 'Narrated history of the Pioneer Museum',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'dewey-perkins',
      name: 'Dewey Perkins Home',
      description: [
        'The Dewey Perkins Home is associated with Brigham Dewey Perkins, a member of the prominent Perkins pioneer family of Taylor. The Perkins family was deeply rooted in Taylor\u2019s founding generation. Jesse Nelson Perkins moved his family to Walker (now Taylor), Arizona, arriving on January 8, 1879.',
        'Brigham Young Perkins (1850\u20131937), son of Jesse, was a Mormon pioneer, missionary, and farmer who kept a biography and journal documenting life in Taylor. Dewey Perkins carried on the family\u2019s legacy in the community, and the home stands as a testament to the Perkins family\u2019s enduring presence in Taylor.',
      ],
      imagePath: '/images/tours/taylor/dewey-perkins.jpg',
      imageAlt: 'Dewey Perkins Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/dewey-perkins.mp3',
      audioLabel: 'Narrated history of the Dewey Perkins Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'jesse-perkins',
      name: 'Jesse Perkins Home',
      description: [
        'The Jesse Perkins Home is associated with Jesse Nelson Perkins (1819\u20131883), one of the earliest Mormon pioneer settlers of the Silver Creek Valley. Jesse was born in Jackson County, Tennessee, and after converting to the LDS faith, traveled westward to Salt Lake City by October 1849.',
        'In 1878\u20131879, Jesse resettled in Arizona at the request of church leadership. He built a home with two halves \u2014 one for his family and the other for his sister-in-law, Maria Tuttle, the widow of his younger brother. The home remains in the possession of his descendants to this day.',
        'Jesse died on March 3, 1883, from smallpox contracted while caring for his dying son. His headstone in the Taylor Cemetery was carved by his son Reuben, featuring a design of an ox team yoke to symbolize the tremendous effort of Jesse and his wife Rhoda in settling Arizona.',
      ],
      imagePath: '/images/tours/taylor/jesse-perkins.jpg',
      imageAlt: 'Jesse Perkins Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/jesse-perkins.mp3',
      audioLabel: 'Narrated history of the Jesse Perkins Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'jennings-home',
      name: 'Jennings Home',
      description: [
        'The Jennings Home is associated with Cyrus Morgan Jennings, who came to Taylor in 1887 and became one of the town\u2019s most culturally significant figures. Cyrus was the keeper of the famous Jennings Drum, a historic instrument constructed by Major Edward P. Duzette from cowhide, birch, and hickory, which was used in the Nauvoo Legion Band in the 1830s.',
        'Upon settling in Taylor, Cyrus started the Jennings Band. Tradition holds that he would walk out of his house beating the drum while other musicians would join him on the way to the old Church on Center Street. The band and drum played every Fourth of July until Cyrus\u2019s death in 1909.',
        'His son Renz L. Jennings, born in Taylor in 1889, went on to become an Arizona county attorney, superior court judge, and justice of the Supreme Court of Arizona (1960\u20131964). The Jennings Drum is now featured in Taylor\u2019s town logo and continues to be played at dawn every Fourth of July.',
      ],
      imagePath: '/images/tours/taylor/jennings-home.jpg',
      imageAlt: 'Jennings Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/jennings-home.mp3',
      audioLabel: 'Narrated history of the Jennings Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'et-hatch-home',
      name: 'E.T. Hatch Home',
      description: [
        'The E.T. Hatch Home is associated with Ezra Taft Hatch (1864\u20131928), a prominent pioneer and rancher in Taylor. Ezra married Maria Standifird in 1891, connecting two of Taylor\u2019s most important pioneer families \u2014 the Hatches and the Standiferds. The couple had twelve children, all born in Taylor between 1892 and 1913.',
        'Ezra Taft Hatch was a member of the Navajo County Board of Supervisors and became one of the most successful ranchers in Arizona during the early statehood years. The Hatch family played a central role in Taylor\u2019s development \u2014 the Jane Hatch Camp (Pioneer Museum) was named for a Hatch family matriarch, and Reed and Burt Hatch later operated the Hatch Bros. General Store from 1945 until the early 1980s.',
      ],
      imagePath: '/images/tours/taylor/et-hatch-home.jpg',
      imageAlt: 'E.T. Hatch Home in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/et-hatch-home.mp3',
      audioLabel: 'Narrated history of the E.T. Hatch Home',
      hasImage: true,
      hasAudio: true,
    },
    {
      slug: 'shumway-school-house',
      name: 'Shumway School House',
      yearBuilt: 'c. 1900',
      style: 'One-Room Brick Schoolhouse',
      description: [
        'The Shumway School House is a one-room brick schoolhouse built circa 1900 in the community of Shumway, located along Shumway Road approximately 11 miles north of Show Low. It replaced an earlier log meeting house from 1893 and was built from locally fired soft red brick.',
        'Key contributors included chief carpenter Mr. Reynolds, masons George Gardener and his son Charles from Snowflake, and plasterer Neil Hansen of Lakeside. For fifty years, this small building was the hub of the Shumway community, serving as a school for grades one through eight, a church, social center, and venue for weddings and funerals.',
        'The schoolhouse enjoyed total restoration during the 1990s and was dedicated on Memorial Day 2001 as Arizona\u2019s only standing one-room brick schoolhouse. It features a bell steeple at the front entrance and student names from years past etched into the soft bricks. It is maintained by the Taylor/Shumway Heritage Foundation.',
      ],
      imagePath: '/images/tours/taylor/shumway-school-house.jpg',
      imageAlt: 'Shumway School House in Taylor, Arizona',
      audioPath: '/audio/tours/taylor/shumway-school-house.mp3',
      audioLabel: 'Narrated history of the Shumway School House',
      hasImage: true,
      hasAudio: true,
    },
  ],
};

export const allTours: Tour[] = [snowflakeTour, taylorTour];

export function getTourBySlug(slug: string): Tour | undefined {
  return allTours.find((t) => t.slug === slug);
}

export function getStopContext(tour: Tour, stopSlug: string) {
  const index = tour.stops.findIndex((s) => s.slug === stopSlug);
  if (index === -1) return null;
  return {
    stop: tour.stops[index],
    index,
    total: tour.stops.length,
    prev: index > 0 ? tour.stops[index - 1] : null,
    next: index < tour.stops.length - 1 ? tour.stops[index + 1] : null,
  };
}
