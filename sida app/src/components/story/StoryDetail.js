import React from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import molly from '../../assets/img/molly2.png'
import mollycol from '../../assets/img/molly1.png'

const Detail = (props) => {
    return (
        <Container fluid className="mb-4 mt-2">
            <Row>
                <Col md="9" className="text-left text-primary" >
                    <p><span className="first-character">Q</span> uarante ans après la découverte du VIH-1 par des chercheurs pasteuriens (découverte récompensée en 2008 par le Prix Nobel de médecine), le sida reste un fléau inacceptable. En effet, l’épidémie de VIH sévit toujours et le sida est aujourd’hui une des causes principales de décès dans le monde pour les adolescents et les femmes en âge de procréation. Le nombre de nouvelles infections augmente en Europe de l’Est et, en France, on déplore encore environ 6 000 nouvelles contaminations par an*. Le délai entre l’infection par le VIH et son diagnostic reste long (délai médian de 3 ans en France).</p>
                    <p>Unprotected sex and needle exchange are the 2 most common modes of HIV infection in North America. HIV can be transmitted during unprotected heterosexual or homosexual sex, whether vaginal, anal or oral. Although the risk of infection through oral sex is lower, it is still important to use protection such as a dental dam (a latex square covering the sex or anus) or a condom. HIV can also be transmitted as a perinatal infection during the delivery of an HIV-infected woman. However, the risk of perinatal infection is decreasing due to new treatments. HIV can also be transmitted through breastfeeding.
</p>
                </Col>
                <Col md="3" className="order-1 text-center">
                    <img alt="Sida Story before cancer" className="rounded img-fluid story-img"  src={molly} />
                </Col>
            </Row>
            <Row>
                <Col md="3" className="text-center order-2 order-md-1" >
                    <img alt="Sida Story after tumour removal" className="rounded img-fluid story-img" src={mollycol} />
                </Col>
                <Col md="9" className="text-left text-primary order-1">
                    <p>A person with HIV is highly contagious as soon as the first symptoms appear. These symptoms usually disappear within a week or a month, and the infected person feels well again. However, symptoms may occasionally reappear. The symptoms of HIV infection are similar to those of other viral infections. Only an HIV-positive (AIDS) test will reveal the presence of the virus in the blood. After an HIV infection, it takes about 3 weeks for the virus to be detected in the blood, although in some people the antibodies do not become detectable for 3 months. The period during which antibodies develop and appear in the blood is called seroconversion. After this seroconversion, the virus can be detected by a blood test.</p>
                    <p>
If you think you have HIV, only an HIV test will reveal the presence of the virus in your blood. This is a voluntary process and you can choose to do it anonymously. Your results will remain confidential. You can be tested at your doctor's office or at a sexual health clinic, many of which are run by local public health units.</p>
                </Col>
            </Row>
            <Row>
                <Col  className="text-left text-primary">
                    <p>HIV testing can involve two types of analysis: a preliminary test that detects HIV antibodies and a confirmatory test.  If the result of the rapid test, which requires a finger prick blood sample, is positive for HIV, a second laboratory test must be performed to confirm the presence of HIV
.</p>
                    <p>
If you are found to be HIV positive, you and your doctor will discuss treatment options as well as support groups and other services that can help you cope.</p>
                    <p>You will need to tell your sexual partners (past, present and future) to prevent them from getting HIV or to help them get treatment if they have been infected. Laws regarding the need to inform partners vary by province, but most provincial authorities have services available. Your doctor, or your provincial health department, can help your partners with testing and treatment needs</p>
                    <p>Molly suffered a stroke and brain hemorrhage that friday afternoon from which
                    she would never recover. She was rushed to Temple street hospital for brain
                    surgery but all hope was done. Molly gave up her fight on the 3rd September
                    2016 in her daddys arms with her Mummy and Granny, our princess lost the only fight worth having, the fight to live and
                         love.</p>
                    <p>MHIV is usually treated with highly active antiretroviral therapy (HAART), a powerful combination of anti-HIV drugs. HAART does not cure HIV, but it does reduce the number of viruses in the blood, boost the immune system and slow the progression of the disease. HAART consists of at least 3 drugs. The use of several drugs that act in different ways prevents the virus from becoming resistant to the treatment. The risk of resistance increases when fewer drugs are used, when too low a dose is given, or when drugs are stopped, even for a short time
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail