function process_argv() {
  const { argv } = process;
  const result = studentStatus(argv[2], argv[3]);

  return result;
}

function studentStatus(name, studentId) {
  // * Mencari nomor urut mahasiswa
  const studentNumber = studentId.substring(studentId.length - 4);

  // * Mencari program studi
  let studyProgramName;
  const studyProgramCode = studentId.substring(
    studentId.length - 6,
    studentId.length - 4
  );

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

  // * Mencari tahun terdaftar
  const year = studentId.substring(studentId.length - 10, studentId.length - 6);

  // * Mencari fakultas
  const facultyCode = studentId.substring(0, studentId.length - 10);
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

  let textResult = `Mahasiswa a.n ${name} terdaftar sebagai mahasiswa Program Studi ${studyProgramName} pada ${facultyName} sejak tahun ${year}.`;

  return textResult;
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = studentStatus;
