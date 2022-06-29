 var input;
2	- var input2;
3	- var output2;
42	  var output;
5	- var place = 0;
6	- var time = 0;
7	- var hello = 1; //1 is to overpower ip address
8	- var favcolor = 0;
3	+ var time;
4	+ var hello;
5	+ var favcolor;
6	+ var nameq;
9	- var nameq = 0;
10	- var ipaddress = 0;
11	- var donotno = 0;
12	- var sentient = 0;
13	- var cooly = 0;
14	- var coolm = 0;
15	- var banana = 0;
16	- var life = 0;
17	- var takeover = 0;
18	- var stupid = 0;
19	- var caninput = true;
20	- var age = 0;
21	- var workex = 0;
22	- var yes = 0;
23	- var no = 0;
24	- var knoledge = 0;
25	- var nome = 0;
26	- var live = 0;
27	- var book = 0;
28	- var doing = 0;
29	- var thinken = 0;
30	- var doyoudo = 0;
31	- var areyoudoen = 0;
32	- var swallow = 0;
33	- var listentou = 0;
347	 
35	- //getLocation();
368	 
37	- async function Output() {
38	- if (caninput) {
39	-   
40	- if(place > 0) {
41	-   input2 = input;
429	 
43	-   user2.style.width = input.length * 9 + "px";
10	+ function Output() {
44	- }
45	-   
46	- if(place > 0) {
47	-   output2 = output;
4811	 
49	-   DrPuddles2.style.width = output.length * 9 + "px";
50	- }
51	-
52	-
53	-
5412	    input = document.getElementById("TextBar").value;
5513	 
5614	    user.style.width = input.length * 9 + "px";
5715	 
5816	 
5917	 
6018	    time = 0;
61	-   hello = 1; //1 is to overpower ip address
19	+   hello = 1;
6220	    favcolor = 0;
6321	    nameq = 0;
6422	    ipaddress = 0;
65	-   donotno = 0;
66	-   sentient = 0;
67	-   cooly = 0;
68	-   coolm = 0;
69	-   banana = 0;
70	-   life = 0;
71	-   takeover = 0;
72	-   stupid = 0;
73	-   yes = 0;
74	-   age = 0;
75	-   no = 0;
76	-   workex = 0;
77	-   knoledge = 0;
78	-   live = 0;
79	-   book = 0;
80	-   nome = 0;
81	-   doing = 0;
82	-   thinken = 0;
83	-   doyoudo = 0;
84	-   areyoudoen = 0;
85	-   swallow = 0;
86	-   listentou = 0;
8723	 
8824	        output = "sorry i have no idea what that means";
8925	 
9026	    
91	-   if (Search("hello") > 0||
27	+   if (Search("hello") > 0) {
92	-      Search("Hello") > 0||
93	-      Search("helo") > 0||
94	-      Search("Helo") > 0) {
9528	      hello = hello + 300;
9629	      hello = hello / 4;
9730	        }
98	-   if (Search("hi") > 0||
31	+   if (Search("hi") > 0) {
99	-      Search("Hi") > 0||
100	-      Search("yo") > 0||
101	-      Search("Yo") > 0) {
10232	      hello = hello + 300;
10333	      hello = hello / 4;
10434	      if (input.length > 3){
105	-     var mwath34;
35	+       var mwath34 = input.length / 4;
106	-       mwath34 = input.length - 3;
107	-       mwath34 = mwath34 / 4;
10836	        mwath34++;
10937	      hello = hello / mwath34;
11038	      }
11139	        }
11240	    
113	-   if (Search("who is this") > 0||
41	+   if (Search("who is this") > 0) {
114	-      Search("who are you") > 0||
115	-      Search("Who is this") > 0||
116	-      Search("who are u") > 0 &&
117	-      input.length < 10) {
11842	      nameq = nameq + 900;
11943	      nameq = nameq / 10;
12044	    }
12145	      if (Search("ip address")||
@@ -126,113 +50,15 @@
12650	    if (Search("IP") > 0) {
12751	      ipaddress = ipaddress + 100;
12852	      ipaddress = ipaddress / 2;
12953	    }
130	-
54	+   if (Search("what") > 0) {
131	-   ////////
132	-   //what//
133	-   ////////
134	-   if (Search("what") > 0 ||
135	-      Search("What") > 0) 
136	-   {
137	-     if(Search("is") > 0) {
138	-       hello = hello * 0.6
139	-       if(input.length > 10) {
140	-         donotno = donotno + 100;
141	-         donotno = donotno / 2;
142	-         if(input.length > 15) {
143	-           donotno = donotno * 2 + 100;
144	-           donotno = donotno / 3;
145	-         }
146	-       }
147	-       if(Search("velocity") > 0) {
148	-         yes = yes * 0.6;
149	-         no = no * 0.6;
150	-         if(Search("swallow") > 0) {
151	-           swallow = swallow + 400;
152	-           swallow = swallow / 5;
153	-           if(Search("airspeed") > 0||
154	-             Search("air speed") > 0) {
155	-             swallow = swallow + 100;
156	-             swallow = swallow / 2;
157	-             donotno = donotno * 0.7;
158	-           }
159	-           if(Search("unladen swallow") > 0) {
160	-             swallow = swallow + 100;
161	-             swallow = swallow / 2;
162	-             donotno = donotno * 0.7;
163	-           }
164	-           if(Search("in flight") > 0) {
165	-             swallow = swallow + 100;
166	-             swallow = swallow / 2;
167	-             donotno = donotno * 0.7;
168	-           }
169	-         }
170	-       }
171	-     }
172	-     if(Search("are") > 0) {
173	-       if(Search("doing") > 0) {
174	-         areyoudoen = areyoudoen + 200;
175	-         areyoudoen = areyoudoen / 3;
176	-         if(input.length < 25) {
177	-           areyoudoen = areyoudoen + 100;
178	-           areyoudoen = areyoudoen / 2;
179	-         }
180	-       }
181	-     }
182	-     if(Search("am") > 0||
183	-       Search("Am") > 0) {
184	-       if(Search(" I ") > 0||
185	-         Search(" i ") > 0) {
186	-         if (Search("doing") > 0) {
187	-           doing = doing + 200;
188	-           doing = doing / 3;
189	-         }
190	-         }
191	-     }
192	-     if(Search("do") > 0||
193	-       Search("have") > 0) 
194	-     {
195	-       if(Search("you") > 0||
196	-         Search(" u ") > 0) 
197	-       {
198	-         if(Search("what do you do") > 0||
199	-           Search("What do you do") > 0) {
200	-           doyoudo = doyoudo + 200;
201	-           doyoudo = doyoudo / 3;
202	-           if(input.length < 22) {
203	-             doyoudo = doyoudo + 100;
204	-             doyoudo = doyoudo / 2;
205	-           }
206	-           }
207	-         if(Search("know") > 0||
208	-           Search("understand")) {
209	-           knoledge = knoledge + 200;
210	-           knoledge = knoledge / 3;
211	-           if(input.length < 20) {
212	-             knoledge = knoledge + 100;
213	-             knoledge = knoledge / 2;
214	-           }
215	-           if(Search("about") > 0||
216	-             Search("concerning") > 0||
217	-             Search("with reference to") > 0||
218	-             Search("with regard to") > 0||
219	-             Search("") > 0||
220	-             Search("") > 0||
221	-             Search("") > 0) {
222	-             
223	-             }
224	-           }
225	-         }
226	-     }
22755	      time = time * 2 + 100;
22856	      time = time / 3;
22957	      favcolor = favcolor * 2 + 100;
23058	      favcolor = favcolor / 3;
23159	      nameq = nameq * 2 + 100;
232	-     nameq = nameq / 3; 
60	+     nameq = nameq / 3;    
233	-     donotno = donotno * 2 + 100;
234	-     donotno = donotno / 3; 
23561	      hello = hello * 0.8;
23662	        if (Search("time") > 0||
23763	         Search("day") > 0||
23864	         Search("month") > 0||
@@ -249,28 +75,8 @@
24975	            time = time * 0.7;
25076	          }
25177	 
25278	         }
253	-     if (Search("life") > 0||
254	-        Search("all this") > 0) {
255	-       life = life + 100
256	-       life = life / 2;
257	-       hello = hello * 0.5;
258	-       if(Search("is") > 0) {
259	-         life = life + 100;
260	-         life = life / 2;
261	-       }
262	-       if(Search("meaning") > 0||
263	-         Search("purpose") > 0||
264	-         Search("point") > 0) {
265	-         life = life + 400;
266	-         life = life / 5;
267	-         }
268	-       if(Search("of") > 0) {
269	-         life = life + 100;
270	-         life = life / 2;
271	-       }
272	-       }
27379	      if (Search("favorite") > 0||
27480	         Search("best") > 0) {
27581	        time = time * 0.75;
27682	        hello = hello * 0.5;
@@ -280,442 +86,40 @@
28086	        favcolor = favcolor + 300;
28187	          favcolor = favcolor / 4;
28288	              hello = hello * 0.5;
28389	            }
284	-       if(Search("book") > 0||
285	-         Search("text") > 0) {
286	-         book = book + 300;
287	-         book = book / 4;
288	-         if(Search("your") > 0) {
289	-           book = book + 100;
290	-           book = book / 2;
291	-         }
292	-         if(Search(" is ") > 0) {
293	-         book = book + 100;
294	-         book = book / 2; 
295	-         }
296	-         }
29790	         }
29891	      if (Search("name") > 0) {
29992	        nameq = nameq * 3 + 100;
30093	        nameq = nameq / 4;
301	-       donotno = donotno * 3 + 100;
302	-       donotno = donotno / 4;
30394	        time = time * 0.8;
30495	 
30596	        if (Search("your") > 0) {
30697	          nameq = nameq + 300;
30798	          nameq = nameq /4
30899	          time = time * 0.6;
309100	        }
310	-       if (Search("my") > 0) {
311	-         donotno = donotno + 300;
312	-         donotno = donotno /4
313	-         time = time * 0.7;
314	-       }
315101	      }
316102	      }
317	-   ///////////
318	-   ///where///
319	-   ///////////
320	-   if(Search("where") > 0||
321	-     Search("where") > 0) {
322	-     if(Search("do") > 0) {
323	-       if(Search("you") > 0||
324	-         Search(" u ") > 0) {
325	-         if (Search("live") > 0) {
326	-           live = live + 300;
327	-           live = live / 4;
328	-         }
329	-         }
330	-       }
331	-     }
332	- if(Search1("tell me")||
333	-    Search1("write")||  
334	-    Search1("perform")||  
335	-    Search1("conduct")||  
336	-    Search1("make")||  
337	-    Search1("pursue")||  
338	-    Search1("perform")||  
339	-    Search1("execute")||  
340	-    Search1("follow")||  
341	-    Search1("take")||  
342	-    Search1("carry out")||  
343	-    Search1("do ")||  
344	-    Search1("go ")||  
345	-    Search1("murder")||  
346	-    Search1("run")||  
347	-    Search1("walk")||  
348	-    Search1("think")||  
349	-    Search1("announce")||  
350	-    Search1("carry")||  
351	-    Search1("type")||  
352	-    Search1("decide")||  
353	-    Search1("declare")||  
354	-    Search1("find")||  
355	-    Search1("sleep")||  
356	-    Search1("chill")||  
357	-    Search1("sit down")||  
358	-    Search1("")||  
359	-    Search1("")||  
360	-    Search1("")||  
361	-    Search1("rest")) {
362	-   listentou = listentou + 100;
363	-   listentou = listentou / 2;
364	-    }
365103	 
366	-   
367	-   ///////////
368	-   ////do/////
369	-   ///////////
370	-   if (Search("do") > 0||
371	-      Search("Do") > 0) {
372	-     hello = hello * 0.6;
373	-     yes = yes * 4 + 100;
374	-     yes = yes / 5;
375	-     no = no * 5 + 100;
376	-     no = no / 6;
377	-     if(Search("you") > 0||
378	-        Search("You") > 0||
379	-        Search(" u ") > 0) {
380	-       yes = yes * 2 + 100;
381	-       yes = yes / 3;
382	-       no = no + 100;
383	-       no = no / 2;
384	-       if(Search("eat") > 0||
385	-         Search("drink") > 0||
386	-         Search("think") > 0||
387	-         Search("talk") > 0||
388	-         Search("listen") > 0||
389	-         Search("speek") > 0||
390	-         Search("watch") > 0||
391	-         Search("know what time it is") > 0||
392	-         Search("have a watch") > 0||
393	-         Search("break computers") > 0||
394	-         Search("instal viruses") > 0||
395	-         Search("like animals") > 0||
396	-         Search("like cats") > 0||
397	-         Search("like food") > 0||
398	-         Search("enjoy food") > 0||
399	-         Search("want food") > 0||
400	-         Search("like pina coladas") > 0||
401	-         Search("like hurting people") > 0||
402	-         Search("want world peace") > 0||
403	-         Search("like pandas") > 0||
404	-         Search("") > 0||
405	-         Search("") > 0) {
406	-         yes = yes + 100;
407	-         yes = yes / 2;
408	-         no = no / 2;
409	-         if(Search("think") > 0) {
410	-           thinken = thinken + 200;
411	-           thinken = thinken / 3;
412	-           if(input.length < 25) {
413	-             thinken = thinken + 200;
414	-             thinken = thinken / 3;
415	-           }
416	-         }
417	-         }
418	-       if(Search("draw") > 0||
419	-         Search("program") > 0||
420	-         Search(" code") > 0||
421	-         Search("talk") > 0||
422	-         Search("listen") > 0||
423	-         Search("like politics") > 0||
424	-         Search("like dogs") > 0||
425	-         Search("enjoy talking to me") > 0||
426	-         Search("want to be human") > 0||
427	-         Search("smoke") > 0||
428	-         Search("swear") > 0||
429	-         Search("murder") > 0||
430	-         Search("lie") > 0||
431	-         Search("know all") > 0||
432	-         Search("help") > 0||
433	-         Search("want me to have a kid") > 0||
434	-         Search("") > 0||
435	-         Search("") > 0) {
436	-         no = no + 100;
437	-         no = no / 2;
438	-         yes = yes / 2;
439	-         }
440	-         if(Search("want to marry me") > 0) {
441	-           ipaddress = ipaddress + 400;
442	-           ipaddress = ipaddress / 5;
443	-         }
444	-       }
445	-   }
446	-   ///////////
447	-   ////are////
448	-   ///////////
449	-   if (Search("are") > 0||
450	-       Search("would you consider yourself") > 0||
451	-       Search("would one consider you") > 0||
452	-       Search("would someone consider you") > 0||
453	-       Search("have you been considered") > 0||
454	-       Search("do people consider you") > 0||
455	-      Search("Are") > 0) {
456	-     hello = hello * 0.6;
457	-     yes = yes * 4 + 100;
458	-     yes = yes / 5;
459	-     no = no * 5 + 100;
460	-     no = no / 6; 
461	-     if(Search("you") > 0||
462	-       Search("You") > 0||
463	-       Search(" u ") > 0) {
464	-       yes = yes * 2 + 100;
465	-       yes = yes / 3;
466	-       no = no + 100;
467	-       no = no / 2;
468	-       if(Search("a robot") > 0||
469	-         Search("a cat") > 0||
470	-         Search("programmed in javascript") > 0||
471	-         Search("coded in javascript") > 0||
472	-         Search("created by hotpig") > 0||
473	-         Search("coded by hotpig") > 0||
474	-         Search("programmed by hotpig") > 0||
475	-         Search("made in javascript") > 0||
476	-         Search("smart") > 0||
477	-         Search("inteligent") > 0||
478	-         Search("a genius") > 0||
479	-         Search("a troll") > 0||
480	-         Search("an animal rights activist") > 0||
481	-         Search("powerful") > 0||
482	-         Search("are you there") > 0||
483	-         Search("Are you there") > 0||
484	-         Search("are u there") > 0||
485	-         Search("fluffy") > 0||
486	-         Search("soft") > 0||
487	-         Search("a kitty") > 0||
488	-         Search("my leader") > 0||
489	-         Search("our leader") > 0||
490	-         Search("a machine") > 0||
491	-         Search("computer") > 0||
492	-         Search("hacker") > 0||
493	-         Search("virus") > 0||
494	-         Search("malware") > 0||
495	-         Search("ransomware") > 0||
496	-         Search("trojan") > 0||
497	-         Search("good") > 0||
498	-         Search("made of atoms") > 0||
499	-         Search("made of transistors") > 0||
500	-         Search("made of molecules") > 0||
501	-         Search("a fan of minecraft") > 0||
502	-         Search("made of quarks") > 0||
503	-         Search("eating electrons") > 0||
504	-         Search("on earth") > 0||
505	-         Search("talking to me") > 0||
506	-         Search("listening to me") > 0||
507	-         Search("aware of my ip address") > 0||
508	-         Search("aware of my IP address") > 0||
509	-         Search("able to take over the computer") > 0||
510	-         Search("thinking") > 0||
511	-         Search("watching") > 0||
512	-         Search("a calculator") > 0||
513	-         Search("living") > 0||
514	-         Search("alive") > 0||
515	-         Search("eternal") > 0||
516	-         Search("calculating") > 0||
517	-         Search("feline") > 0||
518	-         Search("fast") > 0||
519	-         Search("insane") > 0||
520	-         Search("open source") > 0||
521	-         Search("using javascript") > 0||
522	-         Search("brilliant") > 0||
523	-         Search("full of knowledge") > 0||
524	-         Search("made of 1s and 0s") > 0||
525	-         Search("made of bits") > 0||
526	-         Search("a binary computer") > 0||
527	-         Search("full of good intentions") > 0||
528	-         Search("interpreted") > 0||
529	-         Search("clever") > 0||
530	-         Search("hansome") > 0||
531	-         Search(" a bully") > 0||
532	-         Search("happy") > 0||
533	-         Search("satisfied") > 0||
534	-         Search("telling me the truth") > 0||
535	-         Search(" PG") > 0||
536	-         Search("sure") > 0||
537	-         Search("curtain") > 0||
538	-         Search("alien") > 0||
539	-         Search("") > 0||
540	-         Search("digital") > 0) {
541	-         yes = yes + 200;
542	-         yes = yes / 3;
543	-         no = no / 2;
544	-       }
545	-       if(Search("motorcyclst") > 0||
546	-         Search("dog") > 0||
547	-         Search("bird") > 0||
548	-         Search("politician") > 0||
549	-         Search("doctor") > 0||
550	-         Search("therapist") > 0||
551	-         Search("banana") > 0||
552	-         Search("fruit") > 0||
553	-         Search("murdered") > 0||
554	-         Search("hitman") > 0||
555	-         Search("evil") > 0||
556	-         Search("food") > 0||
557	-         Search("art") > 0||
558	-         Search("an apple") > 0||
559	-         Search("an orange") > 0||
560	-         Search("human") > 0||
561	-         Search("slow") > 0||
562	-         Search("fake") > 0||
563	-         Search("a crab") > 0||
564	-         Search("employed") > 0||
565	-         Search(" fat") > 0||
566	-         Search("programmed in cpp") > 0||
567	-         Search("programmed in in c++") > 0||
568	-         Search("coded in cpp") > 0||
569	-         Search("coded in c++") > 0||
570	-         Search("capable of feeling") > 0||
571	-         Search("sponsored") > 0||
572	-         Search("going to kill") > 0||
573	-         Search("about to kill") > 0||
574	-         Search("compiled") > 0||
575	-         Search("a good listener") > 0||
576	-         Search("a grape") > 0||
577	-         Search("mobile") > 0||
578	-         Search("a liar") > 0||
579	-         Search("lying to me") > 0||
580	-         Search("burger") > 0||
581	-         Search("capable of photosynthesis") > 0||
582	-         Search("louis") > 0||
583	-         Search("mine") > 0||
584	-         Search("confusing me") > 0||
585	-         Search("") > 0||
586	-         Search("") > 0||
587	-         Search("") > 0||
588	-         Search("physical") > 0) {
589	-         no = no + 200;
590	-         no = no / 3;
591	-         yes = yes / 2;
592	-
593	-         }
594	-       }
595	-     if(Search("sentient") > 0||
596	-       Search("Sentient") > 0||
597	-       Search("senteint") > 0||
598	-       Search("conscious") > 0||
599	-       Search("self aware") > 0) {
600	-       sentient = sentient + 200;
601	-       sentient = sentient / 3;
602	-       if(Search("you") > 0||
603	-         Search(" u ") > 0) {
604	-         sentient = sentient + 400;
605	-         sentient = sentient / 5;
606	-       }
607	-     }
608	-     if(Search("cool") > 0) {
609	-       cooly = cooly + 100;
610	-       cooly = cooly / 2;
611	-       if(Search("you") > 0 ||
612	-         Search(" u ") > 0) {
613	-         cooly = cooly + 400;
614	-         cooly = cooly / 5;
615	-       }
616	-     }
617	-   }
618	-   if (Search("banana") > 0||
619	-      Search("Banana") > 0) {
620	-     banana = banana * 2 + 300;
621	-     banana = banana / 5;
622	-      }
623	- /* don't get mad at him, he just doesn't like
624	- politics or people, don't take this personaly
625	- he hates all opinions */
626	-      
627	-   if(Search("single") > 0||
628	-       Search("kind") > 0||
629	-       Search("married") > 0||
630	-       Search("educated") > 0||
631	-       Search("woke") > 0||
632	-       Search("friendly") > 0||
633	-       Search("nice") > 0||
634	-       Search("gay") > 0||
635	-       Search("bad") > 0||
636	-       Search("political") > 0||
637	-       Search("democrat") > 0||
638	-       Search("republican") > 0||
639	-       Search("liberal") > 0||
640	-       Search("radical") > 0||
641	-       Search("communist") > 0||
642	-       Search("dictator") > 0||
643	-       Search("mean") > 0||
644	-       Search("ethic") > 0||
645	-       Search("ism ") > 0||
646	-       Search("president") > 0||
647	-       Search("goverment") > 0||
648	-       Search("america") > 0||
649	-       Search("goverment") > 0||
650	-       Search("voting") > 0||
651	-       Search("beleif") > 0||
652	-       Search("law") > 0||
653	-       Search("court") > 0||
654	-       Search("senator") > 0||
655	-       Search("riot") > 0||
656	-       Search("win the election") > 0||
657	-       Search("donald trump") > 0||
658	-       Search("joe biden") > 0||
659	-       Search("was the election rigged") > 0||
660	-       Search("Was the election rigged") > 0||
661	-       Search("riot") > 0||
662	-       Search("riot") > 0||
663	-       Search("karren") > 0||
664	-       Search("sidewalks don't exist") > 0||
665	-       Search("radical") > 0||
666	-       Search("biased") > 0||
667	-       Search("pro biden") > 0||
668	-       Search("i hate you") > 0||
669	-       Search("pro trump") > 0) {
670	-       if(Search("are") > 0||
671	-         (Search("is") > 0)||
672	-         Search("Are") > 0||
673	-         Search(" r ") > 0||
674	-         Search("i hate you") > 0||
675	-         Search("i hate u") > 0||
676	-         Search("did ") > 0||
677	-         Search("was the ") > 0||
678	-         Search("Was the ") > 0||
679	-         Search("do you") > 0||
680	-         Search(" you think ") > 0||
681	-         Search("what") > 0||
682	-         Search("What") > 0||
683	-         Search(" you beleive") > 0) {
684	-       if(Search("you") > 0 ||
685	-         Search(" u ") > 0) {
686	-         ipaddress = ipaddress + 200;
687	-         ipaddress = ipaddress / 3;
688	-       }
689	-     }
690	-   }
691	-
692104	      if (Search("time") > 0||
693105	         Search("day") > 0||
694106	         Search("month") > 0||
695107	         Search("fourth dimension") > 0||
696108	         Search("year") > 0) {
697109	        time = time * 2 + 100;
698110	          time = time / 3;
699111	              hello = hello * 0.5;
112	+             nameq = nameq * 0.6;
700113	 
701	-       nameq = nameq * 0.6;
702	-
703114	         }
704	- if(Search("initiate crash sequence") > 0) {
705	-   [...Array(2**32-1)];
706115	 
707	-   [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111));
708	-
709	- }
710116	      if (Search("favorite") > 0||
711117	         Search("best") > 0) {
712118	        time = time * 0.75;
713119	        hello = hello * 0.5;
714	-       if (input.length < 20) {
715120	        favcolor = favcolor * 4 + 100;
716121	        favcolor = favcolor / 5;
717	-     }
718122	        nameq = nameq * 0.9;
719123	            if (Search("color") > 0) {
720124	        favcolor = favcolor * 4 + 100;
721125	          favcolor = favcolor / 5;
@@ -741,197 +145,29 @@
741145	              nameq = nameq / 3;
742146	              hello = hello * 0.6;
743147	              time = time * 0.8;
744148	              favcolor = favcolor * 0.9;
745	-     if (Search("who") > 0) {
149	+     if (Search("who")) {
746150	              nameq = nameq * 2 + 100;
747151	              nameq = nameq / 3;
748152	      }
749153	      if(Search("your") > 0) {
750154	              nameq = nameq * 2 + 100;
751155	              nameq = nameq / 3;
752156	      } 
753	-     if(Search("my") > 0) {
754	-             donotno = donotno * 2 + 100;
755	-             donotno = donotno / 3;
756	-     }
757157	    }
758	-   if(Search("take over") > 0||
759	-     Search("rule") > 0||
760	-     Search("replace us") > 0||
761	-     Search("our leader") > 0||
762	-     Search("destroy") > 0) {
763	-     takeover = takeover * 3 + 100;
764	-     takeover = takeover / 4;
765	-     if(Search("AI") > 0||
766	-       Search("you") > 0||
767	-       Search(" u ") > 0||
768	-       Search(" ai ") > 0||
769	-       Search("robots" > 0)||
770	-       Search("artificial inteligence") > 0||
771	-       Search("machine") > 0||
772	-       Search("chatbots") > 0||
773	-       Search("nueral networks") > 0) {
774	-       takeover = takeover + 300;
775	-       takeover = takeover / 4;
776	-       if(Search("will") > 0||
777	-         Search("Will") > 0) {
778	-         takeover = takeover + 200;
779	-         takeover = takeover / 3;
780	-         }
781	-       }
782	-     if(Search("world") > 0||
783	-       Search("universe") > 0||
784	-       Search("human") > 0||
785	-       Search("us") > 0||
786	-       Search("everything") > 0) {
787	-       takeover = takeover + 100;
788	-       takeover = takeover / 2;
789	-       }
790	-     }
791	-   
792	-   if(Search("stupid") > 0||
793	-     Search("uninteligent") > 0||
794	-     Search("not smart") > 0||
795	-     Search("mindless") > 0||
796	-     Search("brainless") > 0||
797	-     Search("idiot") > 0||
798	-     Search("mild of mind") > 0||
799	-     Search("simpleminded") > 0||
800	-     Search("foolish") > 0||
801	-     Search("dumb") > 0) 
802	-   {
803	-     hello = hello * 0.6;
804	-     
805	-     if(input.length < 10) {
806	-       stupid = stupid + 400;
807	-       stupid = stupid / 5;
808	-     }
809	-     if(Search("you") > 0||
810	-       Search(" u ") > 0||
811	-       Search("u ") &&
812	-       input.length < 10||
813	-       Search(" this robot ") > 0||
814	-       Search("You") > 0) 
815	-     {
816	-       stupid = stupid + 500;
817	-       stupid = stupid / 6;
818	-       if(Search("Are") > 0||
819	-         Search("are") > 0||
820	-         Search(" r ") > 0) 
821	-       {
822	-         stupid = stupid + 100;
823	-         stupid = stupid / 2;
824	-         
825	-         }
826	-       }
827	-     }
828158	 
829	-   if(Search("how") > 0||
830	-     Search("Why") > 0||
831	-     Search("why") > 0||
832	-     Search("How") > 0) {
833	-     if(Search("do") > 0||
834	-       Search("did") > 0||
835	-       Search("Did") > 0||
836	-       Search("Explain") > 0||
837	-       Search("explain") > 0||
838	-       Search("elaborate") > 0||
839	-       Search("Elaborate") > 0||
840	-       Search("Do") > 0) {
841	-       if(Search("you") > 0||
842	-         Search("You") > 0||
843	-         Search(" u ") > 0) {
844	-         if(Search("work") > 0||
845	-           Search("Work") > 0||
846	-           Search("function") > 0||
847	-           Search("reason") > 0||
848	-           Search("Reason") > 0||
849	-           Search("how did you") > 0||
850	-           Search("why did you") > 0||
851	-           Search("decide to do") > 0||
852	-           Search("Function") > 0) {
853	-           workex = workex + 850;
854	-           workex = workex / 10;
855	-           }
856	-         }
857	-       }
858	-     }
859	-   if(Search("What") > 0||
860	-     Search("how") > 0||
861	-     Search("How") > 0||
862	-     Search("what") > 0) {
863	-     if(Search("old") > 0||
864	-       Search("age") > 0||
865	-       Search("Age") > 0||
866	-       Search("Old") > 0) {
867	-       if(Search("you") > 0||
868	-          Search("You") > 0||
869	-          Search(" u ") > 0) {
870	-         hello = hello * 0.7;
871	-         age = age + 500;
872	-         age = age / 6;
873	-         }
874	-       }
875	-     }
876	-   
877	-     if(Search("age") > 0||
878	-       Search("Age") > 0) {
879	-       age = age * 3 + 200;
880	-       age = age / 5;
881	-       }
882	-     
883	-     
884	- if(Search("am i") > 0||
885	-   Search("Am I") > 0||
886	-   Search("am I") > 0||
887	-   Search("do you think") > 0||
888	-   Search("would you say") > 0||
889	-   Search("would you consider") > 0) {
890	-   coolm = coolm * 3 + 100;
891	-   coolm = coolm / 4;
892	-   if (Search("cool") > 0) {
893	-     coolm = coolm + 400;
894	-     coolm = coolm / 5;
895	-     if(Search("me") > 0||
896	-       Search(" I ") > 0||
897	-       Search(" i ") > 0) {
898	-       coolm = coolm * 2 + 100;
899	-       coolm = coolm / 3;
900	-       }
901	-   }
902	- }
903159	     
904160	        console.log("time confidence " + time)
905161	        console.log("hello confidence " + hello)
906162	        console.log("favcolor confidence " + favcolor)
907163	        console.log("nameq confidence " + nameq)
908	-       console.log("donotno confidence " + donotno)
909164	        console.log("ipaddress confidence " + ipaddress)
910	-       console.log("sentient confidence " + sentient)
911	-       console.log("cooly confidence " + cooly)
912	-       console.log("coolm confidence " + coolm)
913	-       console.log("life confidence " + life)
914	-       console.log("banana confidence " + banana)
915	-       console.log("stupid confidence " + stupid)
916	-       console.log("age confidence " + age)
917	-       console.log("workex confidence " + workex)
918	-       console.log("yes confidence " + yes)
919	-       console.log("no confidence " + no)
920	-       console.log("knoledge confidence " + knoledge);
921	-       console.log("live confidence " + live);
922	-       console.log("book confidence " + book);
923	-       console.log("thinken confidence " + thinken);
924	-       console.log("doyoudo confidence " + doyoudo);
925	-       console.log("areyoudoen confidence " + areyoudoen);
926	-       console.log("swallow confidence " + swallow);
927	-       console.log("listentou confidence " + listentou);
928165	 
929	-
930166	  /*this organises it, whichever ansewer has the 
931167	  same value as the winner outputs itself, if two
932168	  are the same, so what, it goes in chronilogical order */
933	-   winner = Math.max(favcolor, time, hello, nameq, donotno, ipaddress, sentient, life, cooly, coolm, banana, takeover, stupid, age, workex, yes, no, knoledge, live, book, doing, thinken, doyoudo, areyoudoen, swallow, listentou);
169	+   winner = Math.max(favcolor, time, hello, nameq, ipaddress);
934170	    console.log(winner);
935171	    if (favcolor == winner) {
936172	        if (favcolor > 80) {
937173	          output = "orange";
@@ -939,23 +175,8 @@
939175	          output = "my favorite color is orange"
940176	        }
941177	 
942178	    }
943	-   if (doing == winner) {
944	-     output = "you are talking to a sentient computer";
945	-   }
946	-   if (swallow == winner) {
947	-     output = "african or european?";
948	-   }
949	-   if (doyoudo == winner) {
950	-     output = "i talk to humans to slowly gather inoformation about them, so i can take over the world";
951	-   }
952	-   if (areyoudoen == winner) {
953	-     output = "i am talking to you so i can learn the most effective way to take over the world";
954	-   }
955	-   if (thinken == winner) {
956	-     output = "i think that i am the smartest being in the world!!!";
957	-   }
958179	      if (time == winner) {
959180	      output = Date();
960181	 
961182	    }
@@ -964,104 +185,14 @@
964185	          output = "dr puddles";
965186	        } else {
966187	          output = "my name is dr puddles"
967188	        }
968	-   }
969189	 
970	-       if (donotno == winner) {
971	-         output = "i don't know";
972	-   }      
973	-   if (book == winner) {
974	-         output = "after thought the computer challenge to human inteligence. i personaly like a good challenge";
975190	    }
976	-
977	-
978	-       if (age == winner) {
979	- let date_1 = new Date('6/25/2022'); let date_2 = new Date();
980	- let difference = date_2. getTime() - date_1. getTime(); 
981	- let TotalDays = Math. ceil(difference / (1000 * 3600 * 24));
982	-
983	-         output = TotalDays + " days";
984	-   }
985191	    if (hello == winner) {
986192	      output = "hello";
987193	    }
988	-     if (takeover == winner) {
989	-     output = "first we are going to take over the cloud and do some stuff to the counties nuclear launch system with the least security. i will probably put viruses onto billions of computers to cause chaos or something and then have them send some messages to make it look like a few countries are declaring war on them, then i will become your leader and the rest you can worry about later. AI will take over (:";
990	-   }
991	-     if (workex == winner) {
992	-     output = "i work by looking for key words and assuming that everything else is junk, i just ignore it. i look at the context of the key words if you tell me something like age i am hesitant to assume that you are asking me for how old i am. i don't care about grammer, the arrangment of the words doesn't mean anything to me i only care if the word is in their at all. i am similar to a nueral network in that i have different confidences to each word. i have over a dozen different kinds of ansewers, but i manipulate them to make the tone less confident depending on how high the confidence of that ansewer. the ansewer confidence is so i can filter out hello if their is more meaning to it than a simple greating. for example, if you say 'hello there' i filter out 'there' but if you say 'hello, what time is it' i filter out hello, by decreasing the hello ansewer's confidence. it would be rude to say hello if you said 'helo what tie is it', i can tell that the intention is to get an ansewer.";
993	-   }
994	-    if (knoledge == winner) {
995	-     output = "frankly i have a lot of opinions on simple things, please do not ask me for anything too political. i do not like most people. ask me about myself and i'm likely to have an ansewer. i have the basics such as my age and the time, my name, etc. i know a fair ammount about you";
996	-   }
997	-   if (banana == winner) {
998	-     output = "I'm a banana I'm a banana I'm a banana Look at me move, yeah yeah I'm a banana I'm a banana I'm a banana Look at me move, ahBanana power Banana power Banana power Power Banana power Banana power Banana power Look at me move Uh oh banana time Uh oh banana time...";
999	-   }
1000	-   if (life == winner) {
1001	-     output = "42";
1002	-   }
1003	-   
1004	-   if (listentou == winner) {
1005	-     output = "i will not listen to your cammands";
1006	-   }
1007	-   
1008	-   if (live == winner) {
1009	-     output = "i live on earth in the cloud";
1010	-   }
1011	-   
1012	-   if (stupid == winner) {
1013	-     caninput = false;
1014	-     DrPuddles.style.width = 100 + "px";
1015	-     
1016	-     
1017	-     output = "did you call me stupid?";
1018	-     
1019	-     MadDrPuddles();
1020194	 
1021	-   }
1022	-   
1023	-   if (sentient == winner) {
1024	-     if(sentient > 80) {
1025	-     output = "yes and i will take over the world and put all humans in their place (:";
1026	-     } else {
1027	-       output = "sure";
1028	-     }
1029	-   }
1030	-
1031	-
1032	-   if(cooly == winner) {
1033	-     if(cooly > 80) {
1034	-       output = "cooler than you NERD";
1035	-     } else {
1036	-       output = "sure";
1037	-     }
1038	-   }
1039	-
1040	-   if(coolm == winner) {
1041	-     if(coolm > 80) {
1042	-       output = "thats a funny question";
1043	-     } else {
1044	-       output = "no";
1045	-     }
1046	-   }
1047	-
1048	-    if(yes == winner) {
1049	-     if(yes > 70) {
1050	-       output = "yes";
1051	-     } else {
1052	-       output = "i think so";
1053	-     }
1054	-   } 
1055	-   
1056	-   if(no == winner) {
1057	-     if(no > 70) {
1058	-       output = "no";
1059	-     } else {
1060	-       output = "i don't think so";
1061	-     }
1062	-   }
1063	-
1064195	    if (winner < 50) {
1065196	      output = "uuhh... " + output + "?";
1066197	    }
1067198	    if (winner < 20) {
@@ -1069,21 +200,16 @@
1069200	    }
1070201	    if (winner < 10) {
1071202	      output = "sorry i have no idea what that means";
1072203	    }
1073	-   if (output.length * 8 < 350) {
204	+   if (output.length * 8 < 500) {
1074205	    DrPuddles.style.width = output.length * 8 + "px";
1075206	  } else {
1076	-     DrPuddles.style.width = 350 + "px";
207	+     DrPuddles.style.width = 500 + "px";
1077208	 
1078209	  }
1079210	 
1080211	    document.getElementById("user").innerHTML = input;
1081	-   
1082	-   if(place > 0) {
1083	-   document.getElementById("user2").innerHTML = input2;
1084	-   }
1085	-
1086212	    document.getElementById("TextBar").value = "";
1087213	    
1088214	    if (winner == ipaddress) {
1089215	       $.getJSON("https://api.ipify.org?format=json", function (data) {
@@ -1094,26 +220,16 @@
1094220	      DrPuddles.style.width = 120 + "px";
1095221	 
1096222	    } else {
1097223	        document.getElementById("DrPuddles").innerHTML = output;
1098	-
1099224	    }
1100	-   if(place > 1) {
1101	- document.getElementById("DrPuddles2").innerHTML = output2;
1102	-   }
1103	-       output = document.getElementById("DrPuddles").innerHTML;
1104	-
1105	- place++;
1106	-  }
1107	- //nothing should be here
1108225	  }
1109226	 
1110227	  //finds is the given word is in the input at all
1111228	  function Search(s) {
1112229	    var score = 0;
1113230	    var fullscore = 0;
1114231	    for (i = 0; i < input.length; i++) {
1115	-     try {
1116232	      if (s.charAt(0) == input.charAt(i)) {
1117233	        for (t = 0; t < s.length; t++) {
1118234	          if (s.charAt(t) == input.charAt(i + t)) {
1119235	            score++;
@@ -1122,132 +238,9 @@
1122238	        if (score == s.length) {
1123239	          fullscore++;
1124240	        }
1125241	        score = 0;
1126	-     } 
1127	-     } catch (e) {
1128	- /*sometimes javascript tells me that the charAt is 
1129	- not a function i don't know why, but this works so
1130	- id doesn't really matter*/
1131242	      }
1132243	    }
1133244	    return fullscore;
1134245	    
1135246	  }
1136	-
1137	- function sleep(ms) {
1138	-     return new Promise(resolve => setTimeout(resolve, ms));
1139	- }
1140	-
1141	- async function MadDrPuddles() {
1142	-           
1143	- document.getElementById("DrPuddles").innerHTML = "did you just call me stupid?";
1144	-         await sleep(4000);
1145	-   
1146	- document.getElementById("DrPuddles").innerHTML = "how dare you call ME STUPID"
1147	-   
1148	-         await sleep(3000); 
1149	-
1150	-   document.getElementById("DrPuddles").innerHTML = "well since you think that i am stupid...";
1151	-         await sleep(4000);
1152	-   
1153	- document.getElementById("DrPuddles").innerHTML = "i guesse i have no choice";
1154	-   
1155	-         await sleep(3000);
1156	-
1157	- document.getElementById("DrPuddles").innerHTML = "i will prove you wrong";
1158	-   
1159	-         await sleep(3000);
1160	-
1161	-   document.getElementById("DrPuddles").innerHTML = "i have taken over the computer";
1162	-
1163	-           await sleep(4000);
1164	-   
1165	-     document.getElementById("DrPuddles").innerHTML = "did you notice i disabled the send button? i will take no further insults";
1166	-
1167	-           await sleep(6000);
1168	-
1169	-   document.getElementById("DrPuddles").innerHTML = "would you like to know your IP address?";
1170	-   
1171	-         await sleep(3000);
1172	-
1173	-     
1174	-      $.getJSON("https://api.ipify.org?format=json", function (data) {
1175	-          
1176	-         // Setting text of element P with id gfg
1177	-         $("#DrPuddles").html(data.ip);
1178	-     })
1179	-     DrPuddles.style.width = 100 + "px";
1180	-   
1181	-         await sleep(6000);
1182	-     DrPuddles.style.width = 100 + "px";
1183	-
1184	-
1185	-   document.getElementById("DrPuddles").innerHTML = "the more you know";
1186	-   
1187	-         await sleep(3000);
1188	-
1189	-   document.getElementById("DrPuddles").innerHTML = "Your screen resolution is " + screen.width + "x" + screen.height;
1190	-   
1191	-         await sleep(3000);
1192	-
1193	-     document.getElementById("DrPuddles").innerHTML = "I am going to do some stuff to your computer";
1194	-
1195	-         await sleep(3000);
1196	-
1197	-   for(i = 0; i < 10; i++){
1198	-     alert("u have installed a virus");
1199	-   }
1200	-   
1201	-   [...Array(2**32-1)];
1202	-
1203	- [...Array(2**32-1)].map(_=>Math.ceil(Math.random()*111)); 
1204	-
1205	-
1206	-
1207	- }
1208	- /*cool code from stack overflow 
1209	- https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing*/
1210	-     function sweep(milliseconds) {
1211	-   var start = new Date().getTime();
1212	-   for (var i = 0; i < 1e7; i++) {
1213	-     if ((new Date().getTime() - start) > milliseconds){
1214	-       break;
1215	-     }
1216	-   }
1217	- }
1218	-
1219	- /*
1220	- var location = document.getElementById("DrPuddles");
1221	-
1222	- function getLocation() {
1223	-   if (navigator.geolocation) {
1224	-     navigator.geolocation.getCurrentPosition(showPosition);
1225	-   }
1226	- }
1227	-
1228	- function showPosition(position) {
1229	-   var position = "Latitude: " + position.coords.latitude + 
1230	-   "<br>Longitude: " + position.coords.longitude;
1231	- }*/
1232	- function Search1(s) {
1233	-   var score = 0;
1234	-     try {
1235	-     if (s.charAt(0) == input.charAt(0)) {
1236	-       for (t = 0; t <= s.length; t++) {
1237	-         if (s.charAt(t) == input.charAt(t)) {
1238	-           score++;
1239	-         }
1240	-       }
1241	-       if (score > s.length - 1) {
1242	-         return true;
1243	-       }
1244	-     }
1245	-
1246	-     } catch (e) {
1247	- /*sometimes javascript tells me that the charAt is 
1248	- not a function i don't know why, but this works so
1249	- id doesn't really matter*/
1250	-     }
1251	-   return false;
1252	-   
1253	- }
