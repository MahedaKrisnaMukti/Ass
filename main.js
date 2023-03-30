function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  // kode program studi
  const studyProgramCode = studentId.substring(4, 6);
  let studyProgramName;
  switch (studyProgramCode) {
    case "21":
      studyProgramName = "Ekonomi";
      break;
    case "22":
      studyProgramName = "Manajemen";
      break;
    case "23":
      studyProgramName = "Akuntansi";
      break;
    case "31":
      studyProgramName = "Administrasi Publik";
      break;
    case "32":
      studyProgramName = "Administrasi Bisnis";
      break;
    case "33":
      studyProgramName = "Hubungan Internasional";
      break;
    case "41":
      studyProgramName = "Teknik Sipil";
      break;
    case "42":
      studyProgramName = "Arsitektur";
      break;
    case "51":
      studyProgramName = "Matematika";
      break;
    case "52":
      studyProgramName = "Fisika";
      break;
    case "53":
      studyProgramName = "Informatika";
      break;
    default:
      studyProgramName = "";
  }

  // kode fakultas
  const facultyCode = studentId.substring(0, 2);
  let facultyName;
  switch (facultyCode) {
    case "FE":
      facultyName = "Fakultas Ekonomi";
      break;
    case "FISIP":
      facultyName = "Fakultas Ilmu Sosial dan Politik";
      break;
    case "FT":
      facultyName = "Fakultas Teknik";
      break;
    case "FTIS":
      facultyName = "Fakultas Teknologi Informasi dan Sains";
      break;
    default:
      facultyName = "";
  }

  // tahun terdaftar
  const year = studentId.substring(2, 6);

  console.log(
    `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${studyProgramName} pada ${facultyName} sejak tahun ${year}.`
  );
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;
