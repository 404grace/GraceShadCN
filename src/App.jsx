import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="m-10 text-center text-lg">
            Nov naslov za našo aplikacijo
          </h1>
          <Tabs defaultValue="zivali">
            <TabsList>
              <TabsTrigger value="zivali">Živali</TabsTrigger>
              <TabsTrigger value="sadje">Sadje</TabsTrigger>
            </TabsList>
            <TabsContent value="zivali">
              <div class="grid grid-cols-3 gap-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Slon</CardTitle>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      className="mb-1 rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"
                    ></img>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev. Danes so poznane tri
                      živeče vrste, ki jim grozi izumrtje: afriški gozdni slon,
                      afriški savanski slon in azijski slon. Sloni živijo v
                      podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Več o slonu</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Slon</CardTitle>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      className="mb-1 rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"
                    ></img>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev. Danes so poznane tri
                      živeče vrste, ki jim grozi izumrtje: afriški gozdni slon,
                      afriški savanski slon in azijski slon. Sloni živijo v
                      podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Več o slonu</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Slon</CardTitle>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      className="mb-1 rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"
                    ></img>
                    <CardDescription>
                      Sloni so večja skupina sesalcev, ki tvorijo družina živali
                      Elephantidae v redu trobčarjev. Danes so poznane tri
                      živeče vrste, ki jim grozi izumrtje: afriški gozdni slon,
                      afriški savanski slon in azijski slon. Sloni živijo v
                      podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Več o slonu</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sadje">Change your password here.</TabsContent>
          </Tabs>
        </div>
        <div className="grid grid-cols-5">
          <div>
            1asdfasdfasdfasdasdf asdf asdfasdasdf asdf asdfasd fasdff f asdfasdf
            asdf asdfasdf asdf
          </div>
          <div>
            <a href="https://google.com">
              <Button>gumb za test</Button>
            </a>
          </div>
          <div>3</div>
        </div>
      </div>
    </>
  );
}
