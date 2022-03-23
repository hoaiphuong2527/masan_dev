@extends('frontend.layouts.master')

@section('style')
@endsection

@section('content')
    <section class="mainContact">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {!! $block->content !!}
                    {{-- <section id="career_oppotunities" class="en">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h2>Senior Mechanical Supervisor</h2>

                        <div>&nbsp;</div>

                        <div class="mb-2">Nui Phao Mining Company · Asia Pacific · 4 weeks ago</div>

                        <div class="mb-2">Mining, Resources &amp; EnergyMining - Engineering &amp; Maintenance</div>

                        <div class="mb-2"><i class="fa fa-briefcase" aria-hidden="true"></i> Full-time</div>

                        <hr>
                        <div>&nbsp;</div>

                        <div>The Senior Mechanical Supervisor is responsible for overseeing all aspects of site maintenance
                            relating to mechanical, fabrication and civil repairs of fixed plant and associated site
                            equipment,
                            within specified budgets and durations, while supporting and driving safety and environmental
                            commitments at both professional and personal levels.&nbsp;</div>

                        <div>&nbsp;</div>

                        <h4 class="list-title">Key Role Responsibilities</h4>

                        <div>
                            <ul>
                                <li>Drive a positive safety attitude within the department. By personally committing to, and
                                    ensuring all persons reporting to this position work within the Environmental and Safety
                                    policies of the company.</li>
                                <li>Actively pursue safety improvements across site, while ensuring all incidents,
                                    non-compliances, hazards and risks are actioned and entered into the site’s safety
                                    reporting
                                    system, ‘OC-Safe’.</li>
                                <li>Regularly review OC-Safe incident reports, hazard reports and outstanding actions
                                    relating
                                    to the Mechanical Maintenance staff. Ensure these are addressed within the stipulated
                                    time
                                    frames and that actions adequately address or mitigate reported risks.</li>
                                <li>Ensure maintenance activities are performed in a cost-effective manner and operating
                                    expenditure is within the parameters of the maintenance budget.</li>
                                <li>Business network group; develop and maintain a close working liaison with all Nui Phao
                                    and
                                    MTC senior and junior levels of management, with special emphasis on production groups.
                                </li>
                                <li>Closely liaise with planning teams to develop weekly and long-term work schedules.</li>
                                <li>Lead multiple disciplined work groups and prioritize resources to achieve strategic and
                                    tactical outcomes.</li>
                                <li>Support site departments by identifying, developing and implementing solutions to
                                    ongoing
                                    maintenance issues within the business.</li>
                                <li>Provide support and technical data to work crews, vendors and contractors as required.
                                </li>
                                <li>Assist in the development of maintenance strategies and ensure they are being
                                    implemented
                                    and outcomes are captured.</li>
                                <li>Facilitate and conduct plant trials as requested.</li>
                                <li>Coordinate repairs during major and extended plant shutdowns relating to Mechanical
                                    trade
                                    group tasks.</li>
                                <li>Analyze team performance and equipment reliability. Recommend/implement improvements to
                                    equipment or maintenance techniques based on analysis findings.</li>
                                <li>Implement training development and deployment plans for the local workforce as required.
                                </li>
                                <li>Administrative functions of the roll include; compilation of multiple trade group
                                    reports
                                    covering highlights, lowlights, business risks and priority deliverables into a single
                                    weekly report. Upload the high-level aspects of the weekly report into the RAR format.
                                </li>
                                <li>Develop and compile monthly reports. Approve leave for both direct &amp; indirect
                                    reports.
                                    Review and approve hard copy time sheets for fixed term service contractors.</li>
                                <li>Conduct and chair shift handover meetings for the Mechanical trade groups.</li>
                                <li>Attend MOC meetings on a weekly basis. Regularly review MOC portfolio progress and
                                    approve
                                    or implement corrective measures as required.</li>
                                <li>Attend weekly and long-term planning meetings.</li>
                                <li>Assist with interviewing and recruitment of new employees.</li>
                                <li>Step up to the Superintendent or higher roll as and when required.</li>
                            </ul>
                        </div>

                        <div>&nbsp;</div>

                        <h4 class="list-title">We are looking for qualified and driven individuals who have</h4>

                        <div>Qualification</div>

                        <div>
                            <div>
                                <ul>
                                    <li>A recognized Engineering Apprenticeship in Mechanical Fitting &amp; Turning, with
                                        post
                                        trade/Engineering qualifications well regarded.</li>
                                    <li>Certificate IV workplace training and assessment desirable.</li>
                                    <li>OH&amp;S representative training and competency.</li>
                                    <li>Hold a current Vietnamese driver’s license or be eligible and willing to do so.</li>
                                </ul>
                            </div>
                        </div>

                        <div>Experience</div>

                        <div>
                            <ul>
                                <li>A minimum of 5-7 years’ experience (post trade training) as a tradesman in a mining
                                    process
                                    environment; followed by a minimum of 5 years in a supervision roll.</li>
                                <li>In addition to a mechanical background. Experience in, or a good understanding of, the
                                    following trade disciplines will be viewed favorably. Fabrication, Cranes &amp; Rigging,
                                    Civil and Light vehicle repair.</li>
                                <li>Maintenance Management System exposure (SAP)</li>
                                <li>Safety, Health, Environment and Community practices, with extensive experience in
                                    conducting
                                    incident investigations, risk assessments and hazard identifications.</li>
                                <li>OH&amp;S</li>
                                <li>Able to interpret engineering drawings</li>
                                <li>Planning experience</li>
                                <li>Offshore work experiences an advantage.</li>
                                <li>Process plant including boilers and pressure vessel familiarity. Crushing and Process
                                    wet
                                    plant experience.</li>
                                <li>General knowledge of mining regulations.</li>
                                <li>Computer literacy &amp; understanding of maintenance management systems, with specific
                                    knowledge of Microsoft office suite.</li>
                            </ul>
                        </div>

                        <h4 class="list-title">We offer</h4>

                        <div>
                            <div>
                                <ul>
                                    <li>This is a permanent, full time role offered on a FIFO or residential basis depending
                                        on
                                        Covid-19 situation. The site is located approximately 1.5hrs  from Hanoi –
                                        Vietnam’s
                                        Capital and is accessible via the national freeway.</li>
                                    <li>A unique opportunity to work in a fast growing &amp; ambitious Vietnamese
                                        organization
                                        with multinational standards, a winning team and ambition to truly globalize
                                        ourselves.
                                    </li>
                                    <li>Continue to explore opportunities and aims to become a further-integrated downstream
                                        tungsten business of a global scale. This will enable the Company to deliver a
                                        consistent and strong financial profile across the commodity cycles. We will also
                                        establish a master plan targeting the&nbsp;development of a unique, technical
                                        knowledge
                                        elite across the mining, metal and chemical industries.</li>
                                </ul>
                            </div>
                            <div id="h-t-apply">
                                <h5>How to apply</h5>

                                <p>Please send us your resume via email <a
                                        href="mailto:recruitment.npmc@mht.masangroup.com">recruitment.npmc@mht.masangroup.com</a>
                                    and our HR Team will
                                    contact you within 7 days.</p>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </section> --}}
                    <section id="career_oppotunities" class="vi">
                        <div>&nbsp;</div>

                        <div>&nbsp;</div>

                        <h2>Senior Mechanical Supervisor</h2>

                        <div>&nbsp;</div>

                        <div class="mb-2">Nui Phao Mining Company · Asia Pacific · 4 weeks ago</div>

                        <div class="mb-2">Mining, Resources &amp; EnergyMining - Engineering &amp; Maintenance</div>

                        <div class="mb-2"><i class="fa fa-briefcase" aria-hidden="true"></i> Full-time</div>

                        <hr>
                        <div>&nbsp;</div>

                        <div>The Senior Mechanical Supervisor is responsible for overseeing all aspects of site maintenance
                            relating to mechanical, fabrication and civil repairs of fixed plant and associated site
                            equipment,
                            within specified budgets and durations, while supporting and driving safety and environmental
                            commitments at both professional and personal levels.&nbsp;</div>

                        <div>&nbsp;</div>

                        <h4 class="list-title">Key Role Responsibilities</h4>

                        <div>
                            <ul>
                                <li>Drive a positive safety attitude within the department. By personally committing to, and
                                    ensuring all persons reporting to this position work within the Environmental and Safety
                                    policies of the company.</li>
                                <li>Actively pursue safety improvements across site, while ensuring all incidents,
                                    non-compliances, hazards and risks are actioned and entered into the site’s safety
                                    reporting
                                    system, ‘OC-Safe’.</li>
                                <li>Regularly review OC-Safe incident reports, hazard reports and outstanding actions
                                    relating
                                    to the Mechanical Maintenance staff. Ensure these are addressed within the stipulated
                                    time
                                    frames and that actions adequately address or mitigate reported risks.</li>
                                <li>Ensure maintenance activities are performed in a cost-effective manner and operating
                                    expenditure is within the parameters of the maintenance budget.</li>
                                <li>Business network group; develop and maintain a close working liaison with all Nui Phao
                                    and
                                    MTC senior and junior levels of management, with special emphasis on production groups.
                                </li>
                                <li>Closely liaise with planning teams to develop weekly and long-term work schedules.</li>
                                <li>Lead multiple disciplined work groups and prioritize resources to achieve strategic and
                                    tactical outcomes.</li>
                                <li>Support site departments by identifying, developing and implementing solutions to
                                    ongoing
                                    maintenance issues within the business.</li>
                                <li>Provide support and technical data to work crews, vendors and contractors as required.
                                </li>
                                <li>Assist in the development of maintenance strategies and ensure they are being
                                    implemented
                                    and outcomes are captured.</li>
                                <li>Facilitate and conduct plant trials as requested.</li>
                                <li>Coordinate repairs during major and extended plant shutdowns relating to Mechanical
                                    trade
                                    group tasks.</li>
                                <li>Analyze team performance and equipment reliability. Recommend/implement improvements to
                                    equipment or maintenance techniques based on analysis findings.</li>
                                <li>Implement training development and deployment plans for the local workforce as required.
                                </li>
                                <li>Administrative functions of the roll include; compilation of multiple trade group
                                    reports
                                    covering highlights, lowlights, business risks and priority deliverables into a single
                                    weekly report. Upload the high-level aspects of the weekly report into the RAR format.
                                </li>
                                <li>Develop and compile monthly reports. Approve leave for both direct &amp; indirect
                                    reports.
                                    Review and approve hard copy time sheets for fixed term service contractors.</li>
                                <li>Conduct and chair shift handover meetings for the Mechanical trade groups.</li>
                                <li>Attend MOC meetings on a weekly basis. Regularly review MOC portfolio progress and
                                    approve
                                    or implement corrective measures as required.</li>
                                <li>Attend weekly and long-term planning meetings.</li>
                                <li>Assist with interviewing and recruitment of new employees.</li>
                                <li>Step up to the Superintendent or higher roll as and when required.</li>
                            </ul>
                        </div>

                        <div>&nbsp;</div>

                        <h4 class="list-title">We are looking for qualified and driven individuals who have</h4>

                        <div>Qualification</div>

                        <div>
                            <div>
                                <ul>
                                    <li>A recognized Engineering Apprenticeship in Mechanical Fitting &amp; Turning, with
                                        post
                                        trade/Engineering qualifications well regarded.</li>
                                    <li>Certificate IV workplace training and assessment desirable.</li>
                                    <li>OH&amp;S representative training and competency.</li>
                                    <li>Hold a current Vietnamese driver’s license or be eligible and willing to do so.</li>
                                </ul>
                            </div>
                        </div>

                        <div>Experience</div>

                        <div>
                            <ul>
                                <li>A minimum of 5-7 years’ experience (post trade training) as a tradesman in a mining
                                    process
                                    environment; followed by a minimum of 5 years in a supervision roll.</li>
                                <li>In addition to a mechanical background. Experience in, or a good understanding of, the
                                    following trade disciplines will be viewed favorably. Fabrication, Cranes &amp; Rigging,
                                    Civil and Light vehicle repair.</li>
                                <li>Maintenance Management System exposure (SAP)</li>
                                <li>Safety, Health, Environment and Community practices, with extensive experience in
                                    conducting
                                    incident investigations, risk assessments and hazard identifications.</li>
                                <li>OH&amp;S</li>
                                <li>Able to interpret engineering drawings</li>
                                <li>Planning experience</li>
                                <li>Offshore work experiences an advantage.</li>
                                <li>Process plant including boilers and pressure vessel familiarity. Crushing and Process
                                    wet
                                    plant experience.</li>
                                <li>General knowledge of mining regulations.</li>
                                <li>Computer literacy &amp; understanding of maintenance management systems, with specific
                                    knowledge of Microsoft office suite.</li>
                            </ul>
                        </div>

                        <h4 class="list-title">We offer</h4>

                        <div>
                            <div>
                                <ul>
                                    <li>This is a permanent, full time role offered on a FIFO or residential basis depending
                                        on
                                        Covid-19 situation. The site is located approximately 1.5hrs  from Hanoi –
                                        Vietnam’s
                                        Capital and is accessible via the national freeway.</li>
                                    <li>A unique opportunity to work in a fast growing &amp; ambitious Vietnamese
                                        organization
                                        with multinational standards, a winning team and ambition to truly globalize
                                        ourselves.
                                    </li>
                                    <li>Continue to explore opportunities and aims to become a further-integrated downstream
                                        tungsten business of a global scale. This will enable the Company to deliver a
                                        consistent and strong financial profile across the commodity cycles. We will also
                                        establish a master plan targeting the&nbsp;development of a unique, technical
                                        knowledge
                                        elite across the mining, metal and chemical industries.</li>
                                </ul>
                            </div>
                            <div id="h-t-apply">
                                <h5>How to apply</h5>

                                <p>Please send us your resume via email <a
                                        href="mailto:recruitment.npmc@mht.masangroup.com">recruitment.npmc@mht.masangroup.com</a>
                                    and our HR Team will
                                    contact you within 7 days.</p>
                            </div>
                        </div>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </section>
                </div>
            @endif
            @if (count($block->children))
                <div class="listFund" data-waypoint="100%">
                    @foreach ($block->children as $item)
                        <div class="listFund__item">
                            <div class="row">
                                <div class="col-md-2 col-sm-3 col-4 break480">
                                    <a target="_blank" href="{{ $item->url }}">
                                        <img src="{{ $item->icon }}" alt="{{ $item->name }}">
                                    </a>
                                </div>
                                <div class="col-md-10 col-sm-9 col-8 break480">
                                    <h4>{{ $item->name }}</h4>
                                    {!! $item->content !!}
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            @endif
        </div>
    </section>
@endsection

@section('script')
@endsection
