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
            <TableBodyCell>Outrage</TableBodyCell>
            <TableBodyCell>
                Tweets that express anger, indignation, or fury at the violence and systemic neglect 
                faced by Black women. These posts often condemn police brutality, judicial inaction, 
                or lack of societal awareness, who use #SayHerName as a method for visibility and 
                accountability. Their goal is to channel grief into resistance and demand recognition 
                of Black women’s sufferings. 
            </TableBodyCell>
            <TableBodyCell>
                "The idea that women are shackled while giving birth is beyond comprehension. 
                Sickening. #massincarceration #sayhername"
                <br/><br/>
                "Hoodies for Trayvon, I can’t breathe for Eric, Hands up for Michael but what 
                about #blackwomen? #HerDreamDeferred #sayhername #toughpolicing"
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Unity and Support</TableBodyCell>
            <TableBodyCell>
                Tweets that support the message of the hashtag and attempt to unify other women 
                or activists to take part in the #SayHerName and #YouOkSis discussion. These posts 
                may include calls to action, empowerment, or encouragement for collective action 
                through protests, vigils, etc. These tweets use inclusive (e.g. womyn) and mobilizing 
                language to sustain community engagement and raise awareness about the 
                intersectionality of racial and gendered violence.
            </TableBodyCell>
            <TableBodyCell>
                "Thank you for letting me know and for speaking #MyaHall’s name #SayHerName"
                <br/><br/>
                "'They think we'll lay down, but I am far from tired.' - Martinez Boyd, brother of #RekiaBoyd #SayHerName #blackwomenlivesmatter"
                <br/><br/>
                "#NoNewNYPD stands in solidarity w/ #SayHerName. $100 M in annual funds shouldn't go to police but to make safety for Black women a reality."
            </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow>
            <TableBodyCell>Sad/Mournful</TableBodyCell>
            <TableBodyCell>
                Tweets that express sorrow, mourning, or lamenting over the violence, injustice, and 
                loss of Black women’s lives. These tweets include sharing names, stories, tributes to 
                victims, the highlighting of systemic issues, and discussions of grief.
            </TableBodyCell>
            <TableBodyCell>
                "We're here to mourn but also to highlight the work being done. #SayHerName"
                <br/><br/>
                "I cant stop crying #BlackWomenMatter #BlackLivesMatter #SayHerName"
            </TableBodyCell>
        </TableBodyRow>
    </TableBody>
</Table>