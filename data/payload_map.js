const payload_map =
    [
        {
            displayTitle: 'etaHEN',
            description: 'All-in-one HEN',
            fileName: 'etaHEN-1.8B.bin',
            author: 'LightningMods_, sleirsgoevy, ChendoChap, astrelsky, illusion',
            source: 'https://github.com/LightningMods/etaHEN',
            version: '1.8 beta'
        },
        {
            displayTitle: 'K-Stuff',
            description: 'FPKG enabler',
            fileName: 'ps5-kstuff-v1.4.bin',
            author: 'sleirsgoevy',
            source: 'https://github.com/idlesauce/ps5-kstuff-builds/releases',
            version: '1.4'
        },
                {
            displayTitle: 'ps5debug',
            description: 'Debugger (Experimental beta)',
            fileName: 'ps5debug.elf',
            author: 'SiSTR0, ctn123',
            source: 'https://github.com/GoldHEN/ps5debug',
            version: '1.0b1'
        },
        {
            displayTitle: 'PS5 Payload ELF Loader',
            description: 'Uses port 9021. Persistent network elf loader',
            fileName: 'elfldr.elf',
            author: 'john-tornblom',
            source:'https://github.com/john-tornblom/ps5-payload-elfldr/releases',
            version: '0.10'
        },
        {
            displayTitle: 'ps5-payload-shsrv',
            description: "Telnet shell server. Runs on port 2323. Uses john-tornblom's elfldr.",
            fileName: 'shsrv.elf',
            author: 'john-tornblom',
            loader: 'john-tornblom-elfldr',
            source:'https://github.com/john-tornblom/ps5-payload-shsrv',
            version: '0.3'
        },
        {
            displayTitle: 'FTPS5 (Non-Persistent)',
            description: 'FTP Server',
            fileName: 'ftps5-np.elf',
            author: 'SiSTR0, zecoxao, EchoStretch',
            source:'https://github.com/EchoStretch/FTPS5/releases',
            version: '1.4'
        },
        {
            displayTitle: 'FTPS5 (Persistent)',
            description: 'FTP Server',
            fileName: 'ftps5-p.elf',
            author: 'SiSTR0, zecoxao, EchoStretch',
            source:'https://github.com/EchoStretch/FTPS5/releases',
            version: '1.4'
        },
        {
            displayTitle: 'Versions',
            description: 'Shows kernel build, os and sdk versions',
            fileName: 'versions.elf',
            author: 'SiSTRo',
            source:'https://github.com/SiSTR0/ps5-versions/releases/download/v1.0/ps5-versions.elf',
            version: '1.0'
        },
        {
            displayTitle: 'GetOSVersion',
            description: 'very slow',
            fileName: 'getOsVersion.elf',
            author: 'logic-68',
            source:'https://github.com/logic-68/getOsVersion/releases',
            version: '1.0.2'
        },
        {
            displayTitle: 'PS5_Browser_appCache_remove',
            description: 'Removes appcache from browser.',
            fileName: 'Browser_appCache_remove.elf',
            author: 'Storm21CH',
            source:'https://github.com/Storm21CH/PS5_Browser_appCache_remove/blob/main/Browser_appCache_remove.elf',
            version: '1.0fix'
        }

    ];
