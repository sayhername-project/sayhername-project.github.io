<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table striped={true}>
    <TableHead>
        <TableHeadCell>Theme</TableHeadCell>
        <TableHeadCell>Definition</TableHeadCell>
        <TableHeadCell>Example Quotes</TableHeadCell>
    </TableHead>
    <TableBody>
        <TableBodyRow>
            <TableBodyCell>Call to Action</TableBodyCell>
            <TableBodyCell>
                Tweets that demand recognition of Black women’s suffering by calling on those 
                in positions of power–such as political leaders, policymakers, and institutions 
                (e.g., Department of Justice, elected officials)–to take concrete steps toward systemic 
                change. These posts go beyond mourning or awareness and uses #SayHerName (and 
                other related hashtags) as an appeal for accountability, reform, and justice. They 
                may include tagging or mentioning public figures, petitions or calls to protest, 
                and framing inaction as complicit behavior.
            </TableBodyCell>
            <TableBodyCell>
                "We need to challenge the narrative that women of color are only affected by state violence through their relationship with men. #sayhername"
                <br/><br/>
                "#SayHerName ACTION TODAY WED 5/20 #NYC Union Sq 530PM Black Women Matter"
                <br/><br/>
                "how many black n brown men on my feed today will #SayHerName and stand with our women who are being taken by police violence"
                <br/><br/>
                "Let #SandraBland be a chilling reminder that ending police violence is not just about men &amp; boys. #SayHerName"
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Resistance</TableBodyCell>
            <TableBodyCell>
                Tweets in this category resist interlocking systems of oppression by calling out 
                injustice, demanding accountability, and challenging the structures that endanger 
                and silence Black women. These posts push back against dominant narratives by 
                highlighting overlooked facts, exposing harmful media framings, and bringing 
                marginalized perspectives into the spotlight—often expressing personal reasons 
                to continue the movement rather than appeals directed at others.
            </TableBodyCell>
            <TableBodyCell>
                "Amazing....Bill Cosby still trending....#SandyBrand...not so much....pay attention and do NOT be fooled...#sayhername...#justiceforsandy"
                <br/><br/>
                "'My role is a contextualizer, but I'm having a hard time contextualizing rather than personalizing this moment' #SayHerName #BTSPHL"
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Informational/Awareness</TableBodyCell>
            <TableBodyCell>
                Tweets that share factual information, statistics, or updates to raise awareness 
                about violence against Black women and the systemic inequities highlighted by 
                #SayHerName. These posts may link to articles, reports, or data from a verified 
                source with the aim to educate followers and ground the conversation in real-world 
                evidence. Tweets may summarize incidents, highlight patterns of injustice, or 
                provide context about the situation. (Includes #HerDreamDeferred, the initial 
                webinar that launched the #SayHerName movement, and Kimberle Crenshaw)
            </TableBodyCell>
            <TableBodyCell>
                "Today 3pm ET: #SayHerName, an online panel on race+gender in state violence. Twitter chat after at #HerDreamDeferred"
                <br/><br/>
                "2 out of 5 women of color report sexual assault by police - Andrea Ritchie. #HerDreamDeferred #sayhername"
                <br/><br/>
                "#SayHerName campaign is a reminder to...offer a more complete - not competing - narrative about policing and race."
                <br/><br/>
                "Erasure is violence, plain and simple. It's the entire reason #SayHerName is an urgent and uniquely necessary call. #TBackInBlack"
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Remembrance</TableBodyCell>
            <TableBodyCell>
                Tweets that mourn and remember the lives of Black women lost to police brutality, 
                domestic violence, or other forms of systemic harm. These posts center the humanity 
                of the victims by sharing their names, photos, or stories to ensure they are not 
                forgotten.
            </TableBodyCell>
            <TableBodyCell>
                "I lift you up #RekiaBoyd another sistah killed by White Cop while doing NOTHING. I #SayHerName so that she lives on."
                <br/><br/>
                "Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. Kayla Moore. #SayHerName"
            </TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>