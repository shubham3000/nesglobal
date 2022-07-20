import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'

export default function Visibility() {
  return (
    <>
      <Header showNav={true} isWhite={true} />

      <section style={{ background: "#10243E" }}>
        <div className="container">
          <div className="top-section d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7">
                <div className="product-topic">
                  <h4>Products</h4>
                </div>
                <div className="product-heading mt-4">
                  <h1>Easy to use… lets work together…</h1>
                </div>
                <div className="product-paragraph mt-4">
                  <p>The	NES	platform	is	created	in	a	way	to	capture	all	the	critical	elements	of	shipping,	origin,	destination,	schedules,	booking,	SLI,	Purchase	order	tracking,	milestones	and	exceptions	and	more…	all	to	enable	your	supply	chain,	drive	collaborations	with	shipping	lines	and	partner	with	you	as	your	reliable	partner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="product-top-section">
            <div className="row">
              <div className="col-lg-4">
                <div className="product-box">
                  <div className="product-tag">
                    <img src='../images/product/visibility/location.png' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Track	and	Trace,	All	in	One	Place</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>Track	vessels,	containers,	and	goods	down	to	the	SKU.	The	Flexport	Platform	gives	you	and	your	team	end-to-end	visibility	and	control	anywhere	in	the	world.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="product-box">
                  <div className="product-tag">
                    <img src='../images/product/visibility/manage.png' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Manage	Your	Supply	Chain	by	Exception</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>Protect	your	supply	chain—and	your	sanity—with	exception	management	backed	by	your Flexport	team.	If	ocean	freight	cargo	rolls	or	sailings	change,	you’ll	know	in	real	time	while	Flexport	works	to	restore	schedules.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="product-box">
                  <div className="product-tag">
                    <img src='../images/product/visibility/data.png' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Data	That	Almost	Goes	Overboard</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>Surface	insights	in	minutes	with	searchable	data.	Examine	transit	times	and	landed	costs.	Master	container	utilization	to	ship	more	for	less.	Make	supply	chain	data	your	competitive advantage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-15">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>GLOBAL	OCEAN	NETWORK</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>A	Carrier	Network	as	Vast	as	the	Ocean</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>At	NES,	transparency	is	everything	and	makes	it	easier	to	share	info	with	carriers.	The	results	are	faster	access	to	available	space,	sailings,	and	ways	for	you	to	find	the	ideal	blend	of	cost	and	transit	time</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility1.png' />
              </div>
            </div>


            <div className="mt-15"></div>

            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility2.png' />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>INTEGRATIONS</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>Predictability	for	Smoother	Sailings</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>Forecast	with	more	precision	and	accuracy.	Industry	leading	carrier	integrations	mean	NES	can	provide	faster	pricing	turnarounds,	quicker	Shipping	Order	(SO)	releases,	and	predictive	transit	times.</p>
              </div>
            </div>

            <div className="mt-15"></div>

            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>SERVICE	OFFERINGS</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>More	Service	Levels	for	More	Control</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>Strike	the	balance	between	speed	and	cost	that’s	right	for	your	business.	Choose	from	several	ocean	freight	options,	including	guaranteed	services,	to	dial	into	a	decision	based	on	your	inventory	needs.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility3.png' />
              </div>
            </div>


            <div className="mt-15"></div>

            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility4.png' />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>ORDER</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>Start	Upstream	with	Order	Management</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>Activate	collaboration	with	your	suppliers.	With	Nes	Order	Management,	you	can	submit	orders,	manage	quantities,	and	discuss	cargo	ready	dates.	Keep	every	PO	in	sight	from	order	to	final	mile.</p>
              </div>
            </div>


            <div className="mt-15"></div>

            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>REPORTING</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>Leagues	of	Data,	Packaged	for You</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>Supply	chains	throw	out	complex	volumes	of	data.	With	searchable,	shareable	reporting,	you	can	use	all	of	it.	Manage		delays.	Prioritize	containers	confirmed	to	sail.	Prepare	your	entire	supply	chain	for	any	scenario.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility5.png' />
              </div>
            </div>


            <div className="mt-15"></div>

            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/visibility/visibility6.png' />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-topic1 mb-4">
                <h4>INSIGHTS</h4>
              </div>
              <div className="product-heading1">
                <h3 style={{ color: "#403F3E" }}>A	Deep	Dive	Your	Whole	Team	Can	Take</h3>
              </div>
              <div className="product-paragraph">
                <p style={{ color: "#737171" }}>Your	team	can	forecast	and	plan	ocean	freight	shipments	precisely	with	transit	time	data	by	lane.	Make	routing	decisions	and	track	supplier	KPIs.	Replace	unfathomable	questions	with	insights	everyone	understands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request A Demo */}

      <div className="mt-15"></div>

      
      <section style={{ background: "url('../images/product/visibility/productbg.png')" }}>
        <div className="container">
          <div className="ready d-flex flex-column justify-content-center align-items-center">
            <div className="ready-heading">
              <h3>Ready to Get Started?</h3>
            </div>
            <div className="ready-paragraph text-center mt-3" style={{ width: "435px" }}>
              <p>Talk	to	a	supply	chain	solutions	expert	and	see	the	NES	Platform	in	action.</p>
            </div>
            <div className="reday-btn mt-3">
              <button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Request A Demo</button>
            </div>
          </div>
        </div>
      </section>


      {/* FAQS */}

      <section class="product-faq mt-15 mb-15">
        <div class="container">
          <div className="product-topic1 mb-5 text-center">
                <h4>NEED ANY HELP?</h4>
          </div>
          <div className="product-faq-heading">
           <h3 class="text-center" style={{color: "#403F3E"}}>Frequently Asked Questions</h3>
          </div>
        
          <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">

            <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">
              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    I	see	your	office	locations	don't	match	with	my	physical	location.	Can	I	still	use	NES?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFiveOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFiveOne"
                    aria-expanded="false" aria-controls="flush-collapseFiveOne">
                    Do	vendors	have	to	book	via	the	Platform?
                  </button>
                </h2>
                <div id="flush-collapseFiveOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFiveOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                    The	NES	Platform	is	designed	to	streamline	booking	submission	between	you	and	your	supplier.	If	your	supplier	chooses	not	to	use	the	Platform	to	submit	and	manage	bookings,	Flexport	is	able	to	accept	bookings	via	email.
                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                    aria-expanded="false" aria-controls="flush-collapseFour">
                    How	long	does	it	take	to	get	set	up	with	NES?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                    aria-expanded="false" aria-controls="flush-collapseTen">
                    What	client	systems	do	you	integrate	with?
                  </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>

              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Do	you	have	a	minimum	number	of	shipments	that	we	must	book	with	you?
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
