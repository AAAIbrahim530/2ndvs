import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7F5',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  formScreen: {
    flex: 1,
    backgroundColor: '#F4F7F5',
    padding: 20,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B4332',
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  statCard: {
    flex: 1,
    minHeight: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DCE7DF',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1B4332',
  },
  statLabel: {
    fontSize: 11,
    color: '#5B665F',
    marginTop: 4,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BCCBC1',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchInputFull: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BCCBC1',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 10,
  },
  clearButton: {
    height: 44,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#DDE9E1',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#1B4332',
    fontWeight: '700',
  },
  pickerBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BCCBC1',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1B4332',
    marginVertical: 8,
  },
  listContent: {
    paddingBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DEE7E1',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cardText: {
    flex: 1,
    paddingRight: 8,
  },
  dishName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#17211B',
  },
  courseText: {
    fontSize: 13,
    color: '#4F6F61',
    fontWeight: '600',
    marginTop: 2,
  },
  descriptionText: {
    fontSize: 14,
    color: '#4A544E',
    marginTop: 8,
  },
  priceText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1B4332',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
  },
  actionButton: {
    borderRadius: 7,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  editButton: {
    backgroundColor: '#2D6A4F',
  },
  deleteButton: {
    backgroundColor: '#B42318',
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#34443A',
    marginTop: 15,
    marginBottom: 5,
  },
  inputField: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#BCCBC1',
    padding: 12,
    borderRadius: 8,
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  actionButtonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
  },
  bottomActions: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
  },
  flexButton: {
    flex: 1,
  },
  primaryButton: {
    minHeight: 46,
    backgroundColor: '#1B4332',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  secondaryButton: {
    minHeight: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#1B4332',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#1B4332',
    fontSize: 16,
    fontWeight: '800',
  },
  cancelButton: {
    minHeight: 46,
    backgroundColor: '#F7E5E3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: '#B42318',
    fontSize: 16,
    fontWeight: '800',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 30,
    color: '#B42318',
  },
});

export default styles;
