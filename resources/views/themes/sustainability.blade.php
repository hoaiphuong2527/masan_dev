@extends('frontend.layouts.master')

@section('style')
@endsection
@php
$title = getPageUrlByCode('sustainability', 'title');
@endphp
@section('content')
@include('themes.partials.base',['banner'=>'/assets/images/subsidiary-banner.png','text'=> $title ])

    <section class="mainContact" id="sustainability">
        <div class="container">
            @if (!empty($blocks['INTRODUCE']) && ($block = $blocks->get('INTRODUCE')->first()))
                <div class="document" data-waypoint="100%">
                    {{-- {!! $block->content !!} --}}
                    
                </div>

{{--              
                <div>
                    <div>
                    <h5>Sustainability is a signifificant part of the company strategy. We integrate sustainability into all activities of the company’s development journey and community’s development.</h5>
                    </div>
                    </div>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td style="background-image:url('frontend/images/subtainability/subtain-1.png');padding:20px; 
                    
                                                                    ">
                                <div>
                                <h5 style="text-align: center;">Sustainability Governance Structure</h5>
                    
                                <p style="text-align: center;">To assess, improve and enhance the efficiency of sustainability implementation at the Company and community, we established 2 committees named CHESS and Energy. The periodic meeting of the committees will be organized to review activities within the term and encourage initiatives contribution of employees.</p>
                                </div>
                                </td>
                                <td style="background-image:url('frontend/images/subtainability/subtain-2.png'); padding:20px; ">
                                <div style="
                                                                                                ">
                                <h5 style="text-align: center;">Sustainability Through Innovation</h5>
                    
                                <p style="text-align: center;">We continuously research and innovate our technology to optimize the entire mineral and metal processing chain and focus on customer solutions through our state-of-the-art Research and Development centers in Germany and in Vietnam to maintain. These not only secure the company’s global technological leadership position in minerals and metal processing but also expand it further into new fields and different areas.</p>
                                </div>
                                </td>
                                <td style="background-image:url('frontend/images/subtainability/subtain-3.png'); padding:20px; ">
                                <div style="
                                                                                                ">
                                <h5 style="text-align: center;">Sustainability<br />
                                Raw Materials &amp; Mining</h5>
                    
                                <p style="text-align: center;">We forged 2 principles on raw materials sourcing management: The continuous expansion of recycling activities and a fair, ethical and environmentally-friendly raw material sourcing. Besides, we minimize ore loss and dilution and look at opportunities to generate revenue projects that will help save resources to expand mine life, reduce cost and increase revenue.</p>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-image:url('frontend/images/subtainability/subtain-4.png'); padding:20px; ">
                                <div style="
                                                                                                ">
                                <h5 style="text-align: center;">Sustainability Processing</h5>
                    
                                <p style="text-align: center;">We apply new technologies from research and innovation to our processing activities to increase the product recovery rate and develop advanced products. Our plants are maintained periodically to ensure continuous operation and enhance production efficiency.</p>
                                </div>
                                </td>
                                <td style="background-image:url('frontend/images/subtainability/subtain-5.png'); padding:20px; ">
                                <div style="
                                                                                                ">
                                <h5 style="text-align: center;">Sustainability Supply Chain</h5>
                    
                                <p style="text-align: center;">We understand the sustainable supply chain management involves integrating environmentally and financially viable practices into the complete supply chain lifecycle from transportation, warehousing, distribution, consumption, return and disposal. Therefore, we operate the supply chain management to assist our organizations in optimizing our end-to-end operations to achieve greater cost savings and profitability.</p>
                                </div>
                                </td>
                                <td style="background-image:url('frontend/images/subtainability/subtain-6.png'); padding:20px; ">
                                <div style="
                                                                                                ">
                                <h5 style="text-align: center;">Sustainability Health and Safety</h5>
                    
                                <p style="text-align: center;">We build safety culture in our working place and make efforts to ensure safety for both work people and operation by safety compulsory policy and strict compliance with the safety standards.</p>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="background-image:url('frontend/images/subtainability/subtain-7.png'); padding:20px; ">
                                <h5>Sustainability Environment</h5>
                    
                                <p>We are fully compliant with the environmental law and encourage our people to put forward initiatives for environmental protection</p>
                                </td>
                                <td style="background-image:url('frontend/images/subtainability/subtain-8.png'); padding:20px; ">
                                <h5>Sustainability Human Resources</h5>
                    
                                <p>We focus on developing our workforce capacity through various training courses, building a good working environment and accelerating employee engagement</p>
                                </td>
                                <td style="
                                                                        background-image:url('frontend/images/subtainability/subtain-9.png'); padding:20px; ">
                                <h5>Sustainability Community</h5>
                    
                                <p>We accompany the community in the sustainable development journey with billion dong of annual community support budgets.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div>&nbsp;</div>
                    
                    <div>&nbsp;</div>
                    
                    <div>View our sustainability report <a href="">here</a></div>
                    
                    <div>&nbsp;</div>
                    
                    <div>&nbsp;</div>
                    
                    <div>&nbsp;</div>
                     --}}

           
            @endif
        </div>
    </section>
@endsection

@section('script')
@endsection
