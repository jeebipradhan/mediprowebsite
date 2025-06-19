import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DownloadItem {
  name: string;
  url: string;
}

export interface DownloadCategory {
  title: string;
  downloads: DownloadItem[];
}

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
  standalone: true,
  imports: [CommonModule],    // <--- ADD THIS!
})
export class DownloadsComponent {
  downloadCategories: DownloadCategory[] = [
    {
      title: 'Visual Exes',
      downloads: [
        { name: 'Medipro Latest Version', url: 'https://www.mediprocomputers.com/visualexes/Medipro.rar' },
        { name: 'Billing Latest Version', url: 'https://www.mediprocomputers.com/visualexes/Billing.rar' },
        { name: 'Advance Lab', url: 'https://www.mediprocomputers.com/visualexes/Account/Debug.rar' },
        { name: 'ClientServerWebAPI', url: 'https://www.mediprocomputers.com/visualexes/ClientServerWebApi.rar' },
        { name: 'Medipro All Setup', url: 'https://www.mediprocomputers.com/visualexes/MediproSetupFiles.rar' },
        { name: 'Report Tools', url: 'https://www.mediprocomputers.com/visualexes/ReportTools.rar' },
        { name: 'Report Tools DLL', url: 'https://www.mediprocomputers.com/visualexes/ReportToolsDll.rar' },
        { name: 'IMS Report Tool', url: 'https://www.mediprocomputers.com/visualexes/IMSReportSystem.rar' },
        { name: 'Auto Backup Tool', url: 'https://www.mediprocomputers.com/visualexes/AutoBackupSchedual.rar' },
        { name: 'Dos Print Tools', url: 'https://www.mediprocomputers.com/visualexes/dosprintui.exe' },
        { name: 'MediproWebApi', url: 'https://www.mediprocomputers.com/visualexes/medipro.api.medipro/MediproWebApi.rar' },
        { name: 'ClientServerApi - I', url: 'https://www.mediprocomputers.com/visualexes/ClientServerApi/ClientServerApi.rar' },
        { name: 'Client-Profile', url: 'https://mediprocomputers.com/visualexes/ClientInformation.rar' },
      ]
    },
    {
      title: 'Blank Databases',
      downloads: [
        { name: 'Medipro Data', url: 'https://www.mediprocomputers.com/visualexes/MediproData.rar' },
        { name: 'Retail Data', url: 'https://www.mediprocomputers.com/visualexes/RetailData.rar' },
        { name: 'Member Data', url: 'https://www.mediprocomputers.com/visualexes/MemberData.rar' }
      ]
    },
    {
      title: 'Setup',
      downloads: [
        { name: 'Medipro Client Setup 32', url: 'https://www.mediprocomputers.com/visualexes/MediproC.rar' },
        { name: 'Billing Client Setup', url: 'https://www.mediprocomputers.com/visualexes/MemberC.rar' },
        { name: 'Medipro Client Setup 64', url: 'https://www.mediprocomputers.com/visualexes/MediproSetup64bit.rar' }
      ]
    },
    {
      title: 'Old Exes',
      downloads: [
        { name: 'Medipro 73/74', url: 'https://www.mediprocomputers.com/visualexes/Medipro7374.rar' },
        { name: 'Billing 73/74', url: 'https://www.mediprocomputers.com/visualexes/Billing7374.rar' },
        { name: 'Medipro 72/73', url: 'https://www.mediprocomputers.com/visualexes/Medipro7273.rar' },
        { name: 'Billing 72/73', url: 'https://www.mediprocomputers.com/visualexes/Billing7273.rar' },
        { name: 'Medipro 71/72', url: 'https://www.mediprocomputers.com/visualexes/Medipro7172.rar' }
      ]
    },
    {
      title: 'Other Exes',
      downloads: [
        { name: 'Lab', url: 'http://182.93.81.114:100/labreport' },
        { name: 'Hotel', url: 'https://www.mediprocomputers.com/visualexes/Hotel.rar' },
        { name: 'Bittiya Mitra', url: 'https://www.mediprocomputers.com/visualexes/BittiyaMitra.rar' },
        { name: 'Serial Number Capture', url: 'https://www.mediprocomputers.com/visualexes/Hdd.exe' },
        { name: 'Data Convert', url: 'https://www.mediprocomputers.com/visualexes/Decode.rar' },
        { name: 'Dos2Visual', url: 'https://www.mediprocomputers.com/visualexes/Dos2Visual.rar' },
        { name: 'SuperMarket', url: 'https://www.mediprocomputers.com/visualexes/SuperMarket.rar' },
        { name: 'Account', url: 'https://www.mediprocomputers.com/visualexes/Account.rar' },
        { name: 'Factory', url: 'https://www.mediprocomputers.com/visualexes/Factory.rar' },
        { name: 'SMSSend', url: 'https://www.mediprocomputers.com/visualexes/SMSSend.rar' },
        { name: 'Password', url: 'https://www.mediprocomputers.com/visualexes/Password.rar' },
        { name: 'Attendance Setup', url: 'https://www.mediprocomputers.com/visualexes/SoftAgeNepal.rar' },
        { name: 'Attendance Device Manager', url: 'https://www.mediprocomputers.com/visualexes/devmngrc_withUSB.rar' },
        { name: '1. ZKTeco Setup', url: 'https://www.mediprocomputers.com/visualexes/1%20att2008_color%20device.rar' },
        { name: '2. ZKTeco', url: 'https://www.mediprocomputers.com/visualexes/ZKTeco.rar' },
        { name: '3. New Time Punch Database-ZKTeco', url: 'https://www.mediprocomputers.com/visualexes/new_timepunch_database.rar' }
      ]
    },
    {
      title: 'Remote Support',
      downloads: [
        { name: 'Team Viewer Client', url: 'https://www.mediprocomputers.com/visualexes/TeamViewer_Medipro.exe' },
        { name: 'Team Viewer Server', url: 'https://www.mediprocomputers.com/visualexes/TeamViewer_Setup.exe' },
        { name: 'AnyDesk', url: 'https://www.mediprocomputers.com/visualexes/AnyDesk.exe' },
        { name: 'Ultra Viewer', url: 'https://www.mediprocomputers.com/visualexes/UltraViewer_setup_6.2_en.exe' },
        { name: 'Team Viewer Mac', url: 'https://www.mediprocomputers.com/visualexes/TeamViewer.rar' }
      ]
    },
    {
      title: 'Documents',
      downloads: [
        { name: 'Tax Clearance Letter 7677', url: 'https://www.mediprocomputers.com/visualexes/official/taxClearance7677.pdf' }
      ]
    },
    {
      title: 'Microsoft .NET Framework',
      downloads: [
        { name: '4.5.3', url: 'https://www.mediprocomputers.com/visualexes/crystal/NDP453-KB2969351-x86-x64-AllOS-ENU.exe' },
        { name: '4.5.6', url: 'https://www.mediprocomputers.com/visualexes/crystal/NDP46-KB3045557-x86-x64-AllOS-ENU.exe' },
        { name: '4.6.2', url: 'https://www.mediprocomputers.com/visualexes/crystal/NDP462-KB3120735-x86-x64-AllOS-ENU.exe' },
        { name: 'Dot Net 3.5 Enable Tools', url: 'https://www.mediprocomputers.com/visualexes/NetOffline.zip' },
        { name: 'IIS Install Tool', url: 'https://www.mediprocomputers.com/visualexes/IIS_Install.rar' },
        { name: 'URL Rewrite Setup', url: 'https://www.mediprocomputers.com/visualexes/rewrite_amd64_en-US.msi' }
      ]
    },
    {
      title: 'Crystal Reporting Tools',
      downloads: [
        { name: 'Crystal Report Setup', url: 'https://www.mediprocomputers.com/visualexes/crystal/CR13SP32Redist32_0-80007712.ZIP' },
        { name: 'Crystal Report Setup-64bit', url: 'https://www.mediprocomputers.com/visualexes/crystal/CR13SP33MSI64_0-80007712.MSI' },
        { name: 'SQLSysClrType 64bit', url: 'https://www.mediprocomputers.com/visualexes/SQLSysClrTypes.msi' },
        { name: 'SQLSysClrType 32bit', url: 'https://www.mediprocomputers.com/visualexes/SQLSysClrTypes32bit.msi' },
        { name: 'Report Viewer', url: 'https://www.mediprocomputers.com/visualexes/ReportViewer.msi' }
      ]
    },
    {
      title: 'Essentials',
      downloads: [
        { name: 'SSMS', url: 'https://aka.ms/ssmsfullsetup' },
        { name: 'Fonts', url: 'https://www.mediprocomputers.com/visualexes/fonts.rar' },
        { name: 'Win RAR', url: 'https://www.mediprocomputers.com/visualexes/wrar340.exe' },
        { name: 'Win RAR 64', url: 'https://www.mediprocomputers.com/visualexes/winrar-x64-401.exe' },
        { name: 'Ultra Iso', url: 'https://www.mediprocomputers.com/visualexes/UltraIso.rar' },
        { name: 'LQ 310 Driver', url: 'https://www.mediprocomputers.com/visualexes/LQ310.zip' },
        { name: 'Feature - Regedit', url: 'https://www.mediprocomputers.com/visualexes/FEATURE_BROWSER_EMULATION.rar' }
      ]
    },
    {
      title: 'Others',
      downloads: [
        { name: 'Year Closing', url: 'https://www.mediprocomputers.com/yearclose.txt' },
        { name: 'NU', url: 'https://www.mediprocomputers.com/Nu.rar' },
        { name: 'Calendar Update', url: 'https://www.mediprocomputers.com/visualexes/calendar.rar' },
        { name: 'Calendar Update TEXT', url: 'https://www.mediprocomputers.com/visualexes/calendar.text' },
        { name: 'Logout', url: 'https://www.mediprocomputers.com/visualexes/LogOut.exe' }
      ]
    }
  ];

  // First group: Visual Exes, Blank Databases, Setup, Old Exes, Other Exes
  get firstGroupCategories(): DownloadCategory[] {
    return this.downloadCategories.slice(0, 5);
  }

  // Second group: Remote Support and everything after
  get secondGroupCategories(): DownloadCategory[] {
    return this.downloadCategories.slice(5);
  }
}
